const successHandler = require("../service/successHandler");
const errorHandler = require("../service/errorHandler");
const PostModel = require("../model/post");

const posts = {
  async getPosts(req, res) {
    const allPosts = await PostModel.find();
    successHandler(res, allPosts);
  },
  async createPosts(req, res) {
    try {
      const { body } = req;
      if (body.content) {
        const { name, content, tags, type } = body;
        const newPost = await PostModel.create({
          name,
          content,
          tags,
          type,
        });
        successHandler(res, newPost);
      } else {
        errorHandler(res);
      }
    } catch (err) {
      errorHandler(res, "資料格式錯誤");
    }
  },
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      await PostModel.findByIdAndDelete(id);
      successHandler(res, null);
    } catch (err) {
      errorHandler(res, "查無此 ID");
    }
  },
  async patchPost(req, res) {
    try {
      const { body } = req;
      if (body.content) {
        const editPost = {
          content: body.content,
        };
        const id = req.params.id;
        await PostModel.findByIdAndUpdate(id, editPost);
        successHandler(res, editPost);
      }else{
        errorHandler(res, "content 為必填");
      }
    } catch (err) {
      errorHandler(res, "查無此 ID");
    }
  },
  async deleteAllPosts(req, res){
    await PostModel.deleteMany({});
    successHandler(res, []);
  },
};

module.exports = posts;

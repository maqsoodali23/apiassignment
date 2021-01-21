import { blog as blogModel } from '../models';
import responseResult from '../utilities/responseUtility';

// Create new blog functionality

export const addBlog = async (req, res) => {
  try {
    const blog = await blogModel.create(req.body);
    if (blog) {
      responseResult.success(
        "Blog added successfully",
        blog,
        res,
        200
      );
      res.json(responseResult);
    }
    responseResult.error(
      "Sorry! Blog could not be added",
      res,
      400
    );
    res.json(responseResult);
  } catch (err) {
    responseResult.error(
      "Exception occured",
      res,
      400,
      err
    );
    res.json(responseResult);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await blogModel.findOne({ where: { id: req.body.id } });
    if (blog == null) {
      responseResult.error(
        "Invalid blog information provided",
        res,
        400
      );
      res.json(responseResult);
    }
    await blogModel.update(
      {
        blogText: req.body.blogText,
        userId: req.body.userId,
        isArchived: req.body.isArchived
      },
      { where: { id: req.body.id } }
    );
    responseResult.success(
      "Blog updated successfully",
      null,
      res,
      200
    );
    res.json(responseResult);
  } catch (err) {
    console.log(err);
    responseResult.error(
      "Exception occured",
      res,
      400,
      err
    );
    res.json(responseResult);
  }
};

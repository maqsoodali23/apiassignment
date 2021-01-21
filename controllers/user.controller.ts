import { user as userModel } from '../models';
import { hash, compare } from 'bcrypt';
import responseResult from '../utilities/responseUtility';

// Create new user functionality

export const signup = async (req, res) => {
  try {
    req.body.password = await hash(req.body.password, 10);
    const user = await userModel.create(req.body);
    if (user) {
      responseResult.success(
        "User created successfully",
        user,
        res,
        200
      );
      res.json(responseResult);
    }
    responseResult.error(
      "User could not be regisered",
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

// login user functionality

export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ where: { email: req.body.email } });
    if (user == null) {
      responseResult.error(
        "Invalid credentials provided",
        res,
        400
      );
      res.json(responseResult);
    }
    if (await compare(req.body.password, user.password)) {
        responseResult.success(
          "Login successfully",
          user,
          res,
          200
        );
      res.json(responseResult);
    }

    responseResult.error(
      "Bad request",
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

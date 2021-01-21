import { user as userModel } from '../models';
import { hash, compare } from 'bcrypt';
import responseResult from '../utilities/responseUtility';
import { validationResult } from 'express-validator';

// Create new user functionality

export const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      responseResult.error(
        "Data validation failed",
        res,
        400,
        errors.array()
      );
      res.json(responseResult);
    }
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      responseResult.error(
        "Data validation failed",
        res,
        400,
        errors.array()
      );
      res.json(responseResult);
    }
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
      "Invalid login credentials",
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

import { user as userModel } from '../models';
import { hash, compare } from 'bcrypt';

// Create new user functionality

export const signup = async (req, res) => {
  try {
    req.body.password = await hash(req.body.password, 10);
    const user = await userModel.create(req.body);
    if (user) {
      res.json(
        {
          "Success": `User created successfully`,
          "User": {
            "id": `${user.id}`,
            "firstName": `${user.firstName}`,
            "lastName": `${user.lastName}`,
            "email": `${user.email}`
          }
        }
      );
    }
    res.json({"Error": `Sorry! the user could not be registered`});
  } catch (err) {
    res.json({"Error": "Exception occured", "Exception": `${err}`});
  }
};

// login user functionality

export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ where: { email: req.body.email } });
    if (user == null) {
      res.json({"Error": `User not found`});
    }
    if (await compare(req.body.password, user.password)) {
      const loggedUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      res.json(
        {
          "Success": `User logged in successfully`,
           "User": {
              "id": `${loggedUser.id}`,
              "firstName": `${loggedUser.firstName}`,
              "lastName": `${loggedUser.lastName}`,
              "email": `${loggedUser.email}`
            }
        }
      );
    }
    res.json({"Error": `Sorry! the user could not be authenticated`});

  } catch (err) {
    res.json({"Error": "Exception occured", "Exception": `${err}`});
  }
};

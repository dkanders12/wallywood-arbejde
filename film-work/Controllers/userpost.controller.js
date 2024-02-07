import { QueryParamsHandle } from "../Middleware/helpers.js";
import UserPostModel from "../Models/userpost.model.js";
/**
 * Controller for User Actions
 */
class UserPostController {
  /**
   * Method List
   * @param {Object} req Express Request Object
   * @param {Object} res Express Response Object
   */
  list = async (req, res) => {
    // Indhenter parametre fra request objekt
    const qp = QueryParamsHandle(req, "id, name, email");
    // Eksekverer sequelize metode med management values
    const result = await ContactModel.findAll({
      attributes: qp.attributes,
      order: [qp.sortkey],
      limit: qp.limit,
    });
    // Udskriver resultat i json format
    res.json(result);
  };

  /**
   * Method Details
   * @param {Object} req Express Request Object
   * @param {Object} res Express Response Object
   */
  details = async (req, res) => {
    // Destructure assignment af id.
    const { id } = req.params || 0;
    // Eksekverer sequelize metode med attributter og where clause
    const result = await ContactModel.findOne({
      attributes: ["id", "name", "email"],
      where: { id: id },
    });
    // Udskriver resultat i json format
    res.json(result);
  };

  /**
   * Method Details
   * @param {Object} req Express Request Object
   * @param {Object} res Express Response Object
   */
  create = async (req, res) => {
    try {
      const {
        firstname,
        lastname,
        email,
        password,
        active,
        org_id,
        refresh_token,
        groups,
      } = req.body;

      if (
        firstname &&
        lastname &&
        email &&
        password &&
        active &&
        org_id &&
        refresh_token &&
        groups
      ) {
        const userModel = await UserPostModel.create({
          firstname,
          lastname,
          email,
          password, // Note: You should hash the password before storing it in the database for security.
          active,
          org_id,
          refresh_token,
          groups,
        });

        res.json({ newId: userModel.id });
      } else {
        res.sendStatus(418); // I'm a teapot (or any other appropriate status code)
      }
    } catch (error) {
      console.error("Error during user creation:", error);
      res.sendStatus(500); // Internal Server Error
    }
  };
  update = async (req, res) => {
    // Destructure assignment af id.
    const { id } = req.params || 0;
    // Destructure assignment af form data fra request body
    const { name, email } = req.body;
    // Tjekker felt data
    if (name && email) {
      // Opretter record
      const model = await ContactModel.update(req.body, {
        where: { id: id },
        individualHooks: true,
      });
      // Sender nyt id som json object
      res.json({
        msg: "Record update",
      });
    } else {
      res.sendStatus(418);
    }
  };
}

export default UserPostController;

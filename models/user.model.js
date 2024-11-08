const usermaster = (sequelize, Sequelize) => {
    return sequelize.define(
      "userProfile",
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
        },
  
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
  
        contactNo: {
          type: Sequelize.STRING,
        },
  
        address: {
          type: Sequelize.STRING(100),
        },
  
        createdBy: {
          type: Sequelize.INTEGER,
          // allowNull: false,
        },
        modifiedBy: {
          type: Sequelize.INTEGER,
          // allowNull: false,
        },
        isActive: {
          type: Sequelize.BOOLEAN,
          defaultValue:true
          // allowNull: false,
          
        },
      },
      {
        timestemps: true,
        createdAt: "created",
        updatedAt: "modified",
      }
    );
  };
  module.exports = usermaster;
  
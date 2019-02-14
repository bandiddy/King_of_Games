module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    game: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Score.associate = function(models) {
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Score;
};

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
    }
  });

  Score.associate = function(models) {
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Score;
};

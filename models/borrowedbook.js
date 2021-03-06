'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class borrowedBook extends Model {}

  borrowedBook.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    BookId: DataTypes.INTEGER,
    BorrowerId: DataTypes.INTEGER
  }, { sequelize })
  
  borrowedBook.associate = function(models) {
    // associations can be defined here
    borrowedBook.belongsTo(models.Book)
    borrowedBook.belongsTo(models.Borrower)
  };
  return borrowedBook;
};
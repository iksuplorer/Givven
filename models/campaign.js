module.exports = (sequelize, DataTypes) => {
    return sequelize.define('campaign',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type : DataTypes.STRING(40),
            allowNull : false,
            unique : true,
        },
        title_img : {
            type : DataTypes.STRING(50),
            defaultValue : "default.png",
            allowNull : true,
        },
        dest_money : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        current_money : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
            allowNull : true,
        },
        content : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        due_day : {
            type : DataTypes.STRING(20), //나중에 DATE로 바꿀것
            allowNull : false,
        }
    },{
        timestamps : true,
        paranoid : true,
    });
};
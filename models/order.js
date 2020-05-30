module.exports = (sequelize, DataTypes) => {
    return sequelize.define('order',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        from: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        to: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        itemId: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        orderCount : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        transactionKey : {
            type : DataTypes.INTEGER,
            allowNull : false,
        } 
        //auto create
        // campaignId
    },{
        timestamps : true,
        paranoid : true,
    });
};
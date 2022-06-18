// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db = cloud.database()

  try {

    return await db.collection('rubbishMain').orderBy('_count', 'desc').limit(20)
      .get()

  } catch (e) {
    console.error(e)
  }
}
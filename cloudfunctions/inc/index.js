// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db = cloud.database()
  const _ = db.command
  
  try {

    return await db.collection('rubbishMain').doc(event.id)
      .update({
        data: {
          _count: _.inc(1)
        }
      })

  } catch (e) {
    console.error(e)
  }
}
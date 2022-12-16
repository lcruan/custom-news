'use strict';
// 1. 获取数据库的引用
const db = uniCloud.database( )
exports.main = async (event, context) => {
  
  // 2. 获取label表的数据
  let label = await db.collection('label').get()
	
	//返回数据给客户端
	return {
    code: 200,
    msg: '数据请求成功',
    data: label.data
  }
};
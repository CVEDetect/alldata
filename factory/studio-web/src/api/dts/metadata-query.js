import request from '@/utils/request'

// 数据库信息api

// 获取表名
export function getTables(params) {
  return request({
    url: '/dts/api/metadata/getTables',
    method: 'get',
    params
  })
}

// 获取schema
export function getTableSchema(params) {
  return request({
    url: '/dts/api/metadata/getDBSchema',
    method: 'get',
    params
  })
}

// 获取字段
export function getColumns(params) {
  return request({
    url: '/dts/api/metadata/getColumns',
    method: 'get',
    params
  })
}

// 根据sql获取字段
export function getColumnsByQuerySql(params) {
  return request({
    url: '/dts/api/metadata/getColumnsByQuerySql',
    method: 'get',
    params
  })
}

// 根据datasourceID、tablename创建表【目标端】
export function createTable(params) {
  return request({
    url: '/dts/api/metadata/createTable',
    method: 'post',
    params
  })
}
// 判断字段是否存在，存在，即更新值，否则添加字段
export function updateColumnsValue(query) {
  return request({
    url: '/dts/api/metadata/updateColumnsValue',
    method: 'post',
    data: query
  })
}

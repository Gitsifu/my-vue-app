'use strict'
import msg from './codeMsgMap'
import axios from 'axios';
import ip from './address'

let HTTP = {};
// 使用由axios库提供的配置的默认值来创建axios实例
let instance = axios.create();

// 添加请求拦截器
let beforeRequest = instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
let beforeResponse = instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//移除请求前置拦截器
// axios.interceptors.request.eject(beforeRequest);
//移除相应前置拦截器
// axios.interceptors.request.eject(beforeResponse);

/**
 * 发送post请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback 回调函数,参数 res.data.data 为主要数据部分
 * @returns {{resData}} 成功就返回具体数据
 */
HTTP.post = function (url, data, callback) {
  instance.post(ip + url, data)
    .then(function (res) {
      //响应成功回调
      if (res.data.code === '200') {
        callback(res.data.data);
      } else {
        alert(msg[res.data.code]);
      }
    })
    .catch(function (err) {
      alert('网络异常，请刷新~');
    });
};

/**
 * 发送get请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback
 */
HTTP.get = function (url, data, callback) {
  let params = {params: data}
  instance.get(ip + url, params)
    .then(function (res) {
      //响应成功回调
      if (res.data.code === '200') {
        callback(res.data.data)
      } else {
        alert(msg[res.data.code]);
      }
    })
    .catch(function (err) {
      alert('网络异常，请刷新~');
    });
};

/**
 * ajax 同步请求,使用的是jquery的ajax请求
 * @param url
 * @param data
 * @param callback
 */
HTTP.asyncGet = function (url, data, callback) {
  $.ajax({
    type: "GET",
    url: ip + url,
    data: data,
    async: false,
    success: function (res) {
      let obj = JSON.parse(res)
      callback(obj.data)
    },
    error: function (res) {
      alert(msg[res.data.code]);
    }
  })
    .catch(function (err) {
      alert('网络异常，请刷新~');
    });
}

export default HTTP;



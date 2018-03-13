'use strict'
import msg from './codeMsgMap'
import Vue from 'vue'
import axios from 'axios';
import ip from './address'

let HTTP = {};

/**
 * 发送post请求
 *
 * @param url 接口url
 * @param data 传递给后端的数据
 * @param callback 回调函数,参数 res.data.data 为主要数据部分
 * @returns {{resData}} 成功就返回具体数据
 */
HTTP.post = function (url, data, callback) {
  axios.post(ip + url, data)
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
  axios.get(ip + url, params)
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
 * ajax 同步请求
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



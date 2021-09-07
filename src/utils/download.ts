import axios from "axios";

/**
 * 下载一个链接
 * @param {string} link
 * @param {string} name
 * @example //下载excel download('http://111.229.14.189/file/1.xlsx')
 */

export default function download(link, name) {
  if (!name) {
    name = link.slice(link.lastIndexOf("/") + 1); // 通过获取最后一个 / 的index，来截取文件名
  }
  let eleLink = document.createElement("a");
  eleLink.download = name;
  eleLink.style.display = "none";
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容
 */
export function downloadFile(name, content) {
  if (typeof name == "undefined") {
    throw new Error("The first parameter name is a must");
  }
  if (typeof content == "undefined") {
    throw new Error("The second parameter content is a must");
  }
  if (!(content instanceof Blob)) {
    content = new Blob([content]);
  }
  const link = URL.createObjectURL(content);
  download(link, name);
}

//使用方式
//downloadFile("1.txt", "lalalallalalla");
//downloadFile("1.json", JSON.stringify({ name: "hahahha" }));

/**
 * 可以用来下载浏览器会默认预览的文件类型，例如mp4,jpg等 图片、pdf等文件，浏览器会默认执行预览，不能调用download方法进行下载
 * 先转blob，生成url再 download
 * 提供一个link，完成文件下载，link可以是  http://xxx.com/xxx.xls
 * 注意：会有同源策略的限制，需要配置转发
 * @param {string} link
 * @param {string} fileName
 */
export function downloadByLink(link, fileName) {
  axios
    .request({
      url: link,
      responseType: "blob", //关键代码，让axios把响应改成blob
    })
    .then((res) => {
      const link = URL.createObjectURL(res.data);
      download(link, fileName);
    });
}

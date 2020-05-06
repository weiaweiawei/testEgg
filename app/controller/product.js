'use strict';

const rp = require('request-promise');

// const request = require('request');
const cheerio = require('cheerio');

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'protest',
    },
});


const Controller = require('egg').Controller;

class productsController extends Controller {
    // async index() {
    //   const { ctx } = this; //当前上下文就是this
    //   ctx.body = 'hi, egg';
    // }
    async product() {
        const { ctx } = this;
        await ctx.render('products/index.ejs', {
            title: '我是标题',
            list: [
                {
                    id: 1,
                    name: '一号'
                }, {
                    id: 2,
                    name: '二号'
                }, {
                    id: 3,
                    name: '三号'
                },
            ],
            person: {
                name: '张三',
                age: 18
            },
            htmlTags: `<div> 
                        <h5>这是一个h5标签</h5> 
                        </div>`
        })

    };
    async getData() {
        const pattern = /cityData = {.*?}}}}/; // 获取地址正则
        const url = "http://m.bendibao.com/news/xiaofeiquan/";
        const { ctx } = this; //当前上下文就是this
        // ctx.body = this
        //-----------------------拿取全部网址
        async function getCitys(x) {
            return rp.get(x).then(body => {
                let allCities = body.match(pattern)[0];
                // let allAdress = eval("(" + allCities + ")");
                let cityData = allCities;
                let allAdress = eval("(" + cityData + ")");
                ctx.body = allAdress;
                return Object.keys(allAdress).map(province => {
                    let citylist = allAdress[province].citylist;
                    return Object.keys(citylist).map(city => {
                        ctx.body = citylist;
                        return {
                            city_name: city.replace(/'/g, ''),
                            city_code: citylist[city].code,
                            province_name: province.replace(/'/g, '')
                        };

                    });
                })
                // .reduce((a,b) => {
                //     return a.concat(b);
                // });

            });
        }
        // let citys =  getCitys(url);
        let citys = await getCitys(url);//开始
        ctx.body = citys
        // let sql = `insert IGNORE into citys (city_name, city_code, province_name) values ('${citys.map(i => {
        //     return ['city_name', 'city_code', 'province_name'].map(j => i[j]).join("','");
        //   }).join("'),('")}')`;
        // let ret = await knex.raw(sql);
        // // ctx.body = citys;
        // ctx.body =await knex('citys').select('*');
        

    }
}

module.exports = productsController;
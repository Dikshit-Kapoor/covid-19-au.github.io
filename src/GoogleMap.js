import React, { useEffect, useState } from 'react'
import GoogleMapDropin from "./GoogleMapDropin";
import { Chart } from "react-google-charts";



function GoogleMap ({ province, newData }) {
    const keys = [
        "State",
        "Confirmed",
        "Deaths",
        "Recovered"
    ];
  const [loading, setLoading] = useState(true);
    useEffect(() => {

        setLoading(false)
        // if (province) {
        //   import(`echarts/map/json/province/${province.pinyin}.json`).then(map => {
        //     echarts.registerMap(province.pinyin, map.default)
        //     setLoading(false)
        //   })
        // } else {
        //   import(`echarts/map/json/world.json`).then(map => {
        //     echarts.registerMap('world', map.default)
        //     setLoading(false)
        //   })
        // }

    }, [province]);
    const [ myData, setMyData] = useState(null);
    useEffect(() => {

        let translate = {
            "NSW":"AU-NSW",
            "ACT":"AU-ACT",
            "NT":"AU-NT",
            "WA":"AU-WA",
            "VIC":"AU-VIC",
            "QLD":"AU-QLD",
            "SA":"AU-SA",
            "TAS":"AU-TAS",
        }
        let temp = [["state","confirmed"]]
        for(let i = 0; i < newData.length; i++)
        {
            temp.push([translate[newData[i][0]],parseInt(newData[i][1])])
        }

        setMyData(temp)

    }, [province]);
    
    let isoRegionCode = newData[i][0];
            if (mapType === 'test-strike') {
                // v: Tooltip text, f: ISO region code
                temp.push([
                    {
                        v: translate[isoRegionCode],
                        f: isoRegionCode
                    },
                    parseFloat(value),
                    "Test Positive Rate: " + parseFloat(value) + '%'
                ]);
            } else {
                temp.push([
                    {
                        v: translate[isoRegionCode],
                        f: isoRegionCode
                    },
                    parseFloat(value)
                ]);
            }
        }

        setMyData(temp)

    }, [province, mapType]);

   const getOption = () => {
        return {
            region: 'AU', // ISO 3166-1 alpha-2 code for Australia
            colorAxis: { colors: mapGradient },
            backgroundColor: 'white',
            datalessRegionColor: 'rgb(216,221,224)',
            defaultColor: '#f5f5f5',
            resolution: 'provinces'
        }
    };
  //       pieces: [
  //         {min: 1000},
  //         {min: 500, max: 999},
  //         {min: 100, max: 499},
  //         {min: 10, max: 99},
  //         {min: 1, max: 9},
  //       ],
  //       padding: 5,
  //       // "inverse": false,
  //       // "splitNumber": 5,
  //       orient: province ? 'horizontal' : 'vertical',
  //       showLabel: province ? false : true,
  //       text: ['High', 'low'],
  //       itemWidth: 10,
  //       itemHeight: 10,
  //       textStyle: {
  //         fontSize: 10
  //       }
  //       // "borderWidth": 0
  //     },
  //     series: [{
  //       left: 'center',
  //       // top: '15%',
  //       // bottom: '10%',
  //       type: 'map',
  //       name: 'Confirmed',
  //       silent: province ? true : false,
  //       label: {
  //         show: true,
  //         position: 'inside',
  //         // margin: 8,
  //         fontSize: 6
  //       },
  //       mapType: province ? province.pinyin : 'world',
  //       data,
  //       zoom: 1.2,
  //       roam: false,
  //       showLegendSymbol: false,
  //       emphasis: {},
  //       rippleEffect: {
  //         show: true,
  //         brushType: 'stroke',
  //         scale: 2.5,
  //         period: 4
  //       }
  //     }]
  //   }
  // }

  // return (
  //   loading ? <div className="loading">Loading...</div> :
  //   <ReactEcharts
  //     echarts={echarts}
  //     option={getOption()}
  //     lazyUpdate={true}
  //     onEvents={{
  //       click (e) {
  //         onClick(e.name)
  //       }
  //     }}
  //   />
  // )



    // const csv = require('fast-csv')
    // const fs = require('fs')
    //

  const getOption = () => {
      return {
          region: 'AU', // Africa
          colorAxis: { colors: [
                    '#ffefef',
                  '#ffc0b1',
                  '#ff8c71',
                  '#ef1717',
                  // '#9c0505'
              ] },
          backgroundColor: 'white',
          datalessRegionColor: 'rgb(216,221,224)',
          defaultColor: '#f5f5f5',
          resolution: 'provinces'
      }
  };

  
    <GoogleMapDropin
                    width={window.innerWidth < 960 ? '100%' : 'auto'}
                    height="28vh"
                    left="auto"
                    align="right"
                    top="40%"
                    chartType="GeoChart"
                    data={myData}
                    options={getOption()}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="YOUR_KEY_HERE"
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
  
}
export default GoogleMap


import "./Blogs.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const YoutubeSearch =() =>{
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(()=>{

    }, [])

    const handleSearchYoutube = async() =>{
       let res = await axios({
        "method": "GET",
        "url": 'https://www.googleapis.com/youtube/v3/search',
        "params":{
            'part':'snippet',
            'maxResults':'20',
            'key':'AIzaSyCHGYIbXGkLjMAltP9AtcdhmjxubZysoko',
            'type' : 'video',
            'q':query
        }
        
    })
    console.log(">>> check res: ", res);
    if(res && res.data && res.data.items){
      let raw = res.data.items;
      let result = [];
    
      if(raw && raw.length > 0){
        raw.map(item => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt =item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        })
        console.log(">>> check result: ", result);
        setVideos(result);
        
      }
    }
    }
    return(
        <div className="youtubeSearchContainer">
            <div className="ytSearch" >
                <input type="text" placeholder="search..."
                    value={query}
                    onChange = {(event) => setQuery(event.target.value)}
                />
                <button type="button" 
                  onClick={handleSearchYoutube}
                >
                    Search
                </button>
            </div>

            {videos && videos.length > 0 &&
              videos.map(item =>{
                return(
                  <div className="yt-result" key={item.id}>
                  <div className="left">
                    <iframe className="ytIframe"
                      src={`https://www.youtube.com/embed/${item.id}`} 
                      title="YouTube video player" frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; 
                      encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>

                    </iframe>
                  </div>
                  
                  <div className="right">
                      <div className="title">
                          {item.title}
                      </div>
                      <div className="created-at">
                        Created-at: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                      </div>
                      <div className="author">
                        Author: {item.author}
                      </div>
                      <div className="description">
                        item.description;
                      </div>
                  </div>
                  
                </div>
                )
              })
            }
        </div>
    )
}

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "t9D0vV1F-SJev8qZCa5FOFhnDc0",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 478,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "8oMF4nlmIn6oEXFqe1FiQtD72Vg",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "HictdSIdeqY"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-22T11:00:30Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#0 KH??A H???C REACT &quot;n??ng h??i CAO&quot; -  H???C &amp; L??M CH??? HO??N TO??N REACT.JS",
//           "description": "Link Udemy: https://www.udemy.com/course/hoidanit-react-advance-guides/ C??c b???n sinh vi??n, mu???n s??? h???u kh??a h???c v???i gi?? ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/HictdSIdeqY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/HictdSIdeqY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/HictdSIdeqY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-22T11:00:30Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "CcLg8Q4EYvBwQeBUH_kZ7Kk7oyY",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "CKelwVoEhco"
//         },
//         "snippet": {
//           "publishedAt": "2022-01-03T11:00:14Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#0 GI???I THI???U KH??A H???C REACT - DEMO S???N PH???M ?????T ???????C KHI K???T TH??C KH??A H???C | React ULTIMATE",
//           "description": "Ch??nh th???c l??n s??ng Udemy : https://www.udemy.com/course/hoidanit-react-basic-ultimate/?",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/CKelwVoEhco/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/CKelwVoEhco/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/CKelwVoEhco/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-01-03T11:00:14Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "w7OMeBD2KeTtLf5NHizECkWmgmE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "V1JONxue4fA"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-20T12:30:12Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#01 React Super Fast V???i Vite | Kh??a H???c React Advanced Guides",
//           "description": "Trong video n??y, ch??ng ta s??? c??ng nhau: ??? T???o ???ng D???ng React.JS V???i Vite (c??ng c??? d???ch code si??u nhanh, ?????i th??? c???nh tranh ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/V1JONxue4fA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/V1JONxue4fA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/V1JONxue4fA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-20T12:30:12Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "SLJPmMbxk-CXsU6TBbFnVN1o2lo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "DI1ZxV0I5sk"
//         },
//         "snippet": {
//           "publishedAt": "2021-08-22T05:00:13Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#106 Deploy ???ng D???ng React.JS C??ng Database MySQL | Kh??a H???c SERN - SQL, Express, React &amp; Node.js",
//           "description": "????? ho??n thi???n kh??a h???c n??y, th?? ch??ng ta kh??ng th??? kh??ng nh???c t???i ???ng d???ng Frontend, project React c???a ch??ng ta. Trong video ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/DI1ZxV0I5sk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/DI1ZxV0I5sk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/DI1ZxV0I5sk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-08-22T05:00:13Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "DdDNlU_6dy4iZHmNgJaJDqjewuw",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "YoQ4-qTclIs"
//         },
//         "snippet": {
//           "publishedAt": "2021-09-13T07:00:15Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#22 React Routers - ??i???u H?????ng Trang V???i React | React C?? B???n Cho Beginners T??? A ?????n Z",
//           "description": "????? chuy???n h?????ng trang, c??ng nh?? cung c???p nhi???u th??ng tin cho ng?????i d??ng, th?? vi???c PH???I D??NG routers l?? ??i???u kh??ng tr??nh ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-13T07:00:15Z"
//         }
//       }
//     ]
//   }
  
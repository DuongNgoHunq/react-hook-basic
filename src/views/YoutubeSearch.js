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
//           "title": "#0 KHÓA HỌC REACT &quot;nâng hơi CAO&quot; -  HỌC &amp; LÀM CHỦ HOÀN TOÀN REACT.JS",
//           "description": "Link Udemy: https://www.udemy.com/course/hoidanit-react-advance-guides/ Các bạn sinh viên, muốn sở hữu khóa học với giá ...",
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
//           "channelTitle": "Hỏi Dân IT",
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
//           "title": "#0 GIỚI THIỆU KHÓA HỌC REACT - DEMO SẢN PHẨM ĐẠT ĐƯỢC KHI KẾT THÚC KHÓA HỌC | React ULTIMATE",
//           "description": "Chính thức lên sóng Udemy : https://www.udemy.com/course/hoidanit-react-basic-ultimate/?",
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
//           "channelTitle": "Hỏi Dân IT",
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
//           "title": "#01 React Super Fast Với Vite | Khóa Học React Advanced Guides",
//           "description": "Trong video này, chúng ta sẽ cùng nhau: ✓ Tạo Ứng Dụng React.JS Với Vite (công cụ dịch code siêu nhanh, đối thủ cạnh tranh ...",
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
//           "channelTitle": "Hỏi Dân IT",
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
//           "title": "#106 Deploy Ứng Dụng React.JS Cùng Database MySQL | Khóa Học SERN - SQL, Express, React &amp; Node.js",
//           "description": "Để hoàn thiện khóa học này, thì chúng ta không thể không nhắc tới ứng dụng Frontend, project React của chúng ta. Trong video ...",
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
//           "channelTitle": "Hỏi Dân IT",
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
//           "title": "#22 React Routers - Điều Hướng Trang Với React | React Cơ Bản Cho Beginners Từ A đến Z",
//           "description": "Để chuyển hướng trang, cũng như cung cấp nhiều thông tin cho người dùng, thì việc PHẢI DÙNG routers là điều không tránh ...",
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
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-13T07:00:15Z"
//         }
//       }
//     ]
//   }
  
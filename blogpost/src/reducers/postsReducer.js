import _ from 'lodash';

import { FETCH_POSTS, FETCH_SINGLE, DELETE_POST } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id'); // bikin Key dari id-nya action.payload.data ----contoh----
		case FETCH_SINGLE:
			// const post = action.payload.data;  //CARA ES5
			// const newState = { ...state };  		//CARA ES5
			// newState[post.id] = post;  				//CARA ES5
			// return newState; 								 	//CARA ES5
			return { ...state, [action.payload.data.id]: action.payload.data }; //CARA ES6 ----contoh----
		case DELETE_POST:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}

//----contoh----
// data yang kita dapat dari action.payload.data itu array[] dan kita mau bikin jadi object{}
// jadi kita pake loadsh_ untuk map keluar Key baru dari id-nya data
// ARRAY yang kita dapat :
// [
//   { id: 4, title: "hi" },
//   { id: 25, title: "Hahaha hahaha hahahaa" },
//   { id: 33, title: "number is 33" }
// ]
// kita pake lodash_ bikin jadi OBJECT dengan Key = id :
// {
// 	"4":{"id":4,"title":"hi"},
// 	"25":{"id":25,"title":"Hahaha hahaha hahahaa"},
// 	"33":{"id":33,"title":"number is 33"}
// }

//----contoh----
//CARA ES6
// bikin object baru pake {...state}
// tambahkan data baru, [action.payload.data.id] ==== "45" sebagai key id
// object dari key id itu action.payload.data ==== {"id":45,"title":"ini konten baru"}
// ingat [] dalam action.payload.data.id bukan lagi bikin array, tapi bikin key
//
// mengapa harus begini? karena format state kita ada id dan isinya object
// {
// 	"45":{"id":45,"title":"ini konten baru"},
// }

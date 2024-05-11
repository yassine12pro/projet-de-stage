import React, { useEffect, useReducer } from 'react'
import {getAll, getAllTags, getAllByTag, search} from '../../../services/foodservice'
import Thumbnails from '../../thumbnails/thumbnails'
import { useParams } from 'react-router-dom'
import Search from '../../search/search'
import Tags from '../../tags/tags'
import Notfound from '../../notfound/notfound'
const initialstate={foods:[] , tags:[]}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FOODS_LOADED':
            return{...state , foods: action.payload}
        case 'TAGS_LOADED':
            return{...state , tags: action.payload}
        default:
            return state    
        }
}


export default function HomePage() {
    const [state,dispatch]=useReducer(reducer,initialstate)
    const {foods , tags}=state
    const {searchTerm , tag}=useParams()
    useEffect(()=>{
        getAllTags().then(tags=>dispatch({type:'TAGS_LOADED' , payload:tags}))

        const loadFoods=tag 
        ? getAllByTag(tag) 
        :searchTerm
        ? search(searchTerm)
        : getAll()

        loadFoods.then(foods=>dispatch({type:'FOODS_LOADED' , payload:foods}))
    },[searchTerm , tag])
  return (
    <>
        <Search/>
        <Tags tags={tags}/>
        {foods.length === 0 && <Notfound linkText='Reset Search '/>}
        <Thumbnails foods={foods}/>
    </>
  )
}

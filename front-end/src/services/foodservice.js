import { samplefood, sampletags } from "../data";
export const getAll = async ()=> samplefood
export const search =async searchTerm =>
    samplefood.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
export const getAllTags = async ()=> sampletags
export const getAllByTag= async tag =>{
    if (tag === 'All') return getAll()
    return samplefood.filter(item=> item.tags?.includes(tag))
}
export const getById = async foodId =>
    samplefood.find(item=>item.id === foodId)

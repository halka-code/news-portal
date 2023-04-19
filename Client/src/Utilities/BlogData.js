export const BlogData = async(id)=> { 
    const res = await fetch('http://localhost:5000/news'); 
    const news = await res.json(); 
    const matchingNews = news.find(item => item._id === id);
    if(matchingNews){
        return matchingNews; 
    }
}
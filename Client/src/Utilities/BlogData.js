export const BlogData = async(id)=> { 
    const res = await fetch('https://news-server-codewithhasib.vercel.app/news'); 
    const news = await res.json(); 
    const matchingNews = news.find(item => item._id === id);
    if(matchingNews){
        return matchingNews; 
    }
}
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts-data');

function getAllFileData(fileNames)
{
    return fileNames.map(fileName => {
        return new Promise((resolve, reject) =>
        {
            // remove md from fileName to get Id
            const Id = fileName.replace(/\.md$/, '');
            
            // read markdown as string
            const fullPath = path.join(postsDirectory, fileName);
            return fs.readFile(fullPath, {encoding: 'utf8'}, (err, fileContents) => {
                // use gray-matter to parse through YAML "front-matter"
                const matterResult = matter(fileContents);
        
                // combine the data with Id
                if (err)
                {
                    return reject(err);
                }
                else
                {
                    return resolve({
                        Id,
                        matterResult
                    });
                };
            });
        })
    });
}

export async function getSortedPostsData() {
    // get file names under post
    return new Promise(resolve => fs.readdir(postsDirectory, (err, fileNames) => {
        Promise.all(
            getAllFileData(fileNames)
        ).then(allPostData => resolve(allPostData.sort((a, b) => a.date < b.date ? 1 : -1))
        ).catch(err => {
            console.error("something went wrong");
        })
    }));
};
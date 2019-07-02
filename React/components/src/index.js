import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
            <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo="Yesterday at 6:45pm"
                content={faker.hacker.phrase()} 
                avatar={faker.image.avatar()} 
            />
            </ApprovalCard >

            <ApprovalCard>
            <CommentDetail 
                author={faker.name.firstName()} 
                timeAgo="Wednesday at 4:18pm"
                content={faker.random.words()} 
                avatar={faker.image.avatar()} 
            />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail  
                author={faker.name.firstName()} 
                timeAgo="Monday at 1:09am"
                content={faker.hacker.phrase()}
                avatar={faker.image.avatar()} 
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail  
                author={faker.name.firstName()} 
                timeAgo="Subday at 11:09am"
                content={faker.hacker.phrase()} 
                avatar={faker.image.avatar()} 
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail  
                author={faker.name.firstName()} 
                timeAgo="Thursday at 5:15pm"
                content={faker.random.words()} 
                avatar={faker.image.avatar()} 
            />
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
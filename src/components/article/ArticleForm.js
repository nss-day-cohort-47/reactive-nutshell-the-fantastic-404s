import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addArticle} from '../../modules/ArticleManager';
import './ArticleCard.css';

export const ArticleForm = () => {
	const loggedInUser = JSON.parse(sessionStorage.getItem("nutshell_user"))
    const [article, setArticle] = useState({
        title: "",
        timestamp: Date.now(),
        synopsis: "",
        image: "",
        url: "",
		userId: loggedInUser
    });

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newArticle = {...article}
        newArticle[event.target.id] = event.target.value
        setArticle(newArticle)
    }

    const handleClickSaveArticle = (event) => {
        event.preventDefault()
        setIsLoading(true);
        addArticle(article)
        .then(() => history.push("/articles"))
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="title">Article Title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article title" value={article.title} />
				</div>
			</fieldset>

            {/* <fieldset>
				<div className="form-group">
					<label htmlFor="date">Article Date:</label>
					<input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="article date" value={article.date} />
				</div>
			</fieldset> */}

            <fieldset>
				<div className="form-group">
					<label htmlFor="synopsis">Article Synopsis:</label>
					<input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article synopsis" value={article.synopsis} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="url">Article URL:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article URL" value={article.url} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="image">Article Image:</label>
					<input type="text" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article image" value={article.image} />
				</div>
			</fieldset>

           

            <button className="button"
				onClick={handleClickSaveArticle}>
				Save Article
          </button>
        </form>
    )
}
import React from 'react'
import ArticleItem from '../../components/ArticleItem/ArticleItem';

const Article = () => {
    return (
        <main style={{minHeight: '100vh'}}>
            <div className="container" style={{marginTop: '150px'}}>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="section-title">Semua Berita</h1>
                        <p>Update berita terbaru untuk menambah informasimu</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6 mb-3">
                        <ArticleItem
                            thumbnail="https://placeimg.com/640/480/tech"
                            title="Test 1"
                            description="Lorem ipsum dolor sit amet consectaur adipisicing elit"
                            link="/artikel/test"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <ArticleItem
                            thumbnail="https://placeimg.com/640/480/tech"
                            title="Test 1"
                            description="Lorem ipsum dolor sit amet consectaur adipisicing elit"
                            link="/artikel/test"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <ArticleItem
                            thumbnail="https://placeimg.com/640/480/tech"
                            title="Test 1"
                            description="Lorem ipsum dolor sit amet consectaur adipisicing elit"
                            link="/artikel/test"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <ArticleItem
                            thumbnail="https://placeimg.com/640/480/tech"
                            title="Test 1"
                            description="Lorem ipsum dolor sit amet consectaur adipisicing elit"
                            link="/artikel/test"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <ArticleItem
                            thumbnail="https://placeimg.com/640/480/tech"
                            title="Test 1"
                            description="Lorem ipsum dolor sit amet consectaur adipisicing elit"
                            link="/artikel/test"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <ArticleItem
                            thumbnail="https://placeimg.com/640/480/tech"
                            title="Test 1"
                            description="Lorem ipsum dolor sit amet consectaur adipisicing elit"
                            link="/artikel/test"
                        />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col text-center">
                        <button className="btn btn-lg btn-primary rounded-pill">Load more</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Article;

import axios from "./Axios"

export const newsCategory = {
    technology: 'technology',
    science: 'science',
    health: 'health',
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    sports: 'sports'
}

export const country = {
    us: 'us',
    be: 'be'
}


const MAX_ITEM_PER_PAGE = 10

export default class serverNews {
    constructor(category, country) {
        this._category = category;
        this._country = country;
        this._searchTerm = '';
        this._pageSize = MAX_ITEM_PER_PAGE;
        this._currentPage = 1;
        this._totalPage = 1;
    }

    _getURL() {
        let url = '/?'

        if (this._category) {
            url += `category=${this._category}`
        }
        if (this._country) {
            url += `&country=${this._country}`
        }
        if (this._searchTerm) {
            url += `&q=${this._searchTerm}`
        }
        if (this._pageSize) {
            url += `&pageSize=${this._pageSize}`
        }
        if (this._currentPage) {
            url += `&page=${this._currentPage}`
        }

        // if(this._category)  url += `category=${this._category}`
        // if(this._country) url += `&country=${this._country}`
        // if(this._searchTerm) url += `&q=${this._searchTerm}`
        // if(this._pageSize) url += `&pageSize=${this._pageSize}`
        // if(this._currentPage) url += `&page=${this._currentPage}`


        return url
    }

    async getNews() {
        try {
            const {
                data
            } = await axios.get(this._getURL())
            // console.log(data)
            this._totalPage = Math.ceil(data.totalResults / this._pageSize)
            // console.log(data.totalResults)
            return {
                articles: data.articles,
                totalPage: this._totalPage,
                currentPage: this._currentPage,
                country: this._country,
                category: this._category,
                totalResults: data.totalResults,
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    next() {
        if (this._isNext()) {
            this._currentPage++
            return this.getNews()
        }
        return false
    }

    prev() {
        if (this._isPrev()) {
            this._currentPage--
            return this.getNews()
        }
        return false
    }

    _isNext() {
        return this._currentPage < this._totalPage
    }

    _isPrev() {
        return this._currentPage < 1
    }

    setCurrentPage(pageNumber) {
        if (pageNumber < 1 && pageNumber > this._totalPage) {
            throw new Error('Invalid Page Number')
        }
        this._currentPage = pageNumber
        return this.getNews()
    }

    changeCategory(category) {
        this._category = category
        this._currentPage = 1
        return this.getNews()
    }

    search(term) {
        this._searchTerm = term
        return this.getNews()
    }
}
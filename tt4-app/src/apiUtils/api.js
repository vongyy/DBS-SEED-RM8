import React from 'react'
import axios from 'axios'

export default {
    postData: () =>
    instance({
        'method': 'POST',
        'url':'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',
        'data': {
            'item1':'data1',
            'item2':'item2'
        },
        'headers': { 
            'content-type':'application/json',
            'x-api-key':'4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP'
        },
    })
}
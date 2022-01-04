import React from 'react'
import { CheckingForm } from './CheckingForm'

export const CardForm = () => {
    return (

        <div class="container w-75 p-2 flex-fill bd-highlight mb-2 bg-dark text-white">
            <div class="row align-items-center h-100">
                <div class="col-6 mx-auto">
                    <div class="card h-100  justify-content-center">
                        <div>
                            <CheckingForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

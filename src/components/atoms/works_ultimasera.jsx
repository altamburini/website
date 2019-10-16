import React, { Component } from 'react'

export default class WorksUltimaSera extends Component {
    render() {
        return (

            <div class="modal" id="worksultimasera" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-full" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body p-4" id="result">
                            <link rel="import" href="ultimasera.htm"></link>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

import React from 'react'

const SizeRedux = () => {
    return (
        <div className="col-6">
            <div className="card h-100 " >
                <div className="card-header">
                    Size:  px
                </div>
                <div className="card-body">
                    <button className="btn btn-dark"  >Giảm</button>
                    <button className="btn btn-dark">Tăng</button>
                    <button className="btn btn-dark">Reset</button>
                </div>
            </div>
        </div>

    )
}

export default SizeRedux

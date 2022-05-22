import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, available } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-secondary text-center">{name}</h2>
                <p>
                    {
                        available.length > 0 ?
                            <span>
                                {
                                    available[0]
                                }
                            </span>
                            :
                            <span className='text-red-500'>No Slots Available</span>
                    }
                </p>
                <p> {available.length} {available.length > 1 ? 'Space Available' : 'Space Available'}</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal" disabled={available.length === 0}
                        onClick={() => setTreatment(service)} class=" modal-button btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>

    );
};

export default Service;
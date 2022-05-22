import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Service from '../Service/Service';
import Loading from '../Shared/Loading/Loading';

import BookingModal from './BookingModal';


const AvailableAppoinments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate])
    return (
        <div>
            <p className='text-secondary font-bold text-center text-xl'>Available Appoinment on{format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Service>)
                }
                {
                    treatment && <BookingModal
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}></BookingModal>
                }
            </div>

        </div>
    );
};

export default AvailableAppoinments;
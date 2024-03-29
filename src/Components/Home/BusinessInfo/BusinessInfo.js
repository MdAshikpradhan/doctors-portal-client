import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const infosData = [
    {
        title: "Opening Hours",
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: "Visit our location",
        description: 'Brooklyn NY, 10003 USA',
        icon: faMarker,
        background: 'dark'
    },
    {
        title: "Call Us Now",
        description: '+156978554',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info =><InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
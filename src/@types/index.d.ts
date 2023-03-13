import React from 'react'

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export interface Geo {
    lat: string;
    lng: string;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type UsersListProps = {
    users: User[], 
    setShowUser: React.Dispatch<React.SetStateAction<boolean>>, 
    setUserId: React.Dispatch<React.SetStateAction<number>>
}

export interface UserProfileProps { 
    userId: number, 
    photos: Photo[], 
    users: User[], 
    setShowUser: React.Dispatch<React.SetStateAction<boolean>>
}
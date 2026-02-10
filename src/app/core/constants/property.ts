import { IProperty } from "../models/property.model";

export const PROPERTIES_DATA: IProperty[] = [
  {
    id: 'prop-001',
    title: 'Modern Apartment in New Cairo',
    description: 'Luxurious 3 bedroom apartment with amazing view in prime location.',
    type: 'apartment',
    status: 'for-sale',
    price: 8500000,
    currency: 'EGP',
    area: 180,
    bedrooms: 3,
    bathrooms: 2,
    floor: 5,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'New Cairo',
      address: '90th Street, Fifth Settlement',
      lat: 30.0131,
      lng: 31.4199
    },
    amenities: ['parking', 'elevator', 'security', 'gym', 'pool'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w-1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-03-20'
  },

  {
    id: 'prop-002',
    title: 'Villa for Rent in Sheikh Zayed',
    description: 'Spacious 4 bedroom villa with private garden and pool.',
    type: 'villa',
    status: 'for-rent',
    price: 45000,
    currency: 'EGP',
    area: 320,
    bedrooms: 4,
    bathrooms: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Sheikh Zayed City',
      address: 'Al Hossary Street',
      lat: 30.0465,
      lng: 31.0007
    },
    amenities: ['parking', 'pool', 'garden', 'security', 'central-ac'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-10',
    updatedAt: '2024-04-05'
  },

  {
    id: 'prop-003',
    title: 'Commercial Office Space',
    description: 'Premium office space in business district, ready for immediate use.',
    type: 'office',
    status: 'for-rent',
    price: 25000,
    currency: 'EGP',
    area: 120,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Nasr City',
      address: 'Makram Ebeid Street',
      lat: 30.0626,
      lng: 31.3367
    },
    amenities: ['parking', 'elevator', 'security', 'internet', 'meeting-rooms'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-01',
    updatedAt: '2024-03-15'
  },

  {
    id: 'prop-004',
    title: 'Residential Land in North Coast',
    description: 'Prime beachfront land perfect for villa construction.',
    type: 'land',
    status: 'for-sale',
    price: 12000000,
    currency: 'EGP',
    area: 500,
    location: {
      country: 'Egypt',
      city: 'North Coast',
      district: 'Marina',
      address: 'Sidi Abdel Rahman',
      lat: 30.9815,
      lng: 28.6409
    },
    amenities: ['beach-access', 'security', 'utilities'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-04-10'
  },

  {
    id: 'prop-005',
    title: 'Luxury Penthouse with Pool',
    description: 'Exclusive penthouse with private pool and panoramic city view.',
    type: 'apartment',
    status: 'for-sale',
    price: 15000000,
    currency: 'EGP',
    area: 280,
    bedrooms: 4,
    bathrooms: 3,
    floor: 12,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Zamalek',
      address: '26th July Street',
      lat: 30.0613,
      lng: 31.2208
    },
    amenities: ['pool', 'parking', 'elevator', 'gym', 'security', 'roof-garden'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-28',
    updatedAt: '2024-04-12'
  },

  {
    id: 'prop-006',
    title: 'Villa in Maadi',
    description: 'Beautiful 5 bedroom villa with large garden.',
    type: 'villa',
    status: 'sold',
    price: 22000000,
    currency: 'EGP',
    area: 450,
    bedrooms: 5,
    bathrooms: 4,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Maadi',
      address: 'Road 9',
      lat: 29.9668,
      lng: 31.2500
    },
    amenities: ['garden', 'parking', 'pool', 'security', 'central-ac'],
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-03-30'
  },

  {
    id: 'prop-007',
    title: 'Studio Apartment Downtown',
    description: 'Modern studio apartment in heart of downtown.',
    type: 'apartment',
    status: 'for-rent',
    price: 8000,
    currency: 'EGP',
    area: 60,
    bedrooms: 0,
    bathrooms: 1,
    floor: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Downtown',
      address: 'Talaat Harb Street',
      lat: 30.0444,
      lng: 31.2357
    },
    amenities: ['elevator', 'security', 'furnished'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-15',
    updatedAt: '2024-04-08'
  },

  {
    id: 'prop-008',
    title: 'Office in Smart Village',
    description: 'Tech-ready office space in Smart Village.',
    type: 'office',
    status: 'for-rent',
    price: 35000,
    currency: 'EGP',
    area: 150,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: 'Smart Village',
      address: 'Building 5',
      lat: 30.0199,
      lng: 31.0003
    },
    amenities: ['parking', 'security', 'internet', 'conference-room', 'cafeteria'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-20',
    updatedAt: '2024-04-05'
  },

  {
    id: 'prop-009',
    title: 'Agricultural Land in Fayoum',
    description: 'Fertile agricultural land with water access.',
    type: 'land',
    status: 'for-sale',
    price: 3000000,
    currency: 'EGP',
    area: 1000,
    location: {
      country: 'Egypt',
      city: 'Fayoum',
      district: 'Tamia',
      address: 'Near Lake Qarun',
      lat: 29.3084,
      lng: 30.8428
    },
    amenities: ['water-access', 'irrigation'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-30',
    updatedAt: '2024-03-25'
  },

  {
    id: 'prop-010',
    title: 'Beach Villa in Ain Sokhna',
    description: 'Direct beach access villa with private dock.',
    type: 'villa',
    status: 'for-sale',
    price: 18000000,
    currency: 'EGP',
    area: 380,
    bedrooms: 4,
    bathrooms: 3,
    location: {
      country: 'Egypt',
      city: 'Ain Sokhna',
      district: 'Porto Sokhna',
      address: 'Beach Road',
      lat: 29.6654,
      lng: 32.3402
    },
    amenities: ['beach-access', 'pool', 'parking', 'security', 'dock'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-15',
    updatedAt: '2024-04-11'
  },

  {
    id: 'prop-011',
    title: 'Two Bedroom Apartment in Heliopolis',
    description: 'Cozy apartment in quiet residential area.',
    type: 'apartment',
    status: 'for-sale',
    price: 4500000,
    currency: 'EGP',
    area: 110,
    bedrooms: 2,
    bathrooms: 2,
    floor: 4,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Heliopolis',
      address: 'El Thawra Street',
      lat: 30.0971,
      lng: 31.3269
    },
    amenities: ['parking', 'elevator', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-10',
    updatedAt: '2024-04-03'
  },

  {
    id: 'prop-012',
    title: 'Warehouse in 10th of Ramadan',
    description: 'Industrial warehouse with loading docks.',
    type: 'office',
    status: 'for-rent',
    price: 20000,
    currency: 'EGP',
    area: 500,
    location: {
      country: 'Egypt',
      city: '10th of Ramadan',
      district: 'Industrial Zone',
      address: 'Sector 3',
      lat: 30.2967,
      lng: 31.7467
    },
    amenities: ['loading-dock', 'parking', 'security', '24/7-access'],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-25',
    updatedAt: '2024-04-01'
  },

  {
    id: 'prop-013',
    title: 'Luxury Apartment with Nile View',
    description: 'Stunning Nile view from every room.',
    type: 'apartment',
    status: 'for-sale',
    price: 12000000,
    currency: 'EGP',
    area: 200,
    bedrooms: 3,
    bathrooms: 3,
    floor: 8,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Garden City',
      address: 'Nile Corniche',
      lat: 30.0386,
      lng: 31.2275
    },
    amenities: ['nile-view', 'parking', 'elevator', 'security', 'gym'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-18',
    updatedAt: '2024-04-07'
  },

  {
    id: 'prop-014',
    title: 'Townhouse in Rehab City',
    description: 'Modern townhouse in gated community.',
    type: 'villa',
    status: 'for-rent',
    price: 25000,
    currency: 'EGP',
    area: 220,
    bedrooms: 3,
    bathrooms: 2,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Rehab City',
      address: 'District 7',
      lat: 30.0643,
      lng: 31.4946
    },
    amenities: ['parking', 'garden', 'security', 'community-pool'],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-05',
    updatedAt: '2024-04-09'
  },

  {
    id: 'prop-015',
    title: 'Commercial Shop in Mall',
    description: 'Prime location shop in popular shopping mall.',
    type: 'office',
    status: 'for-rent',
    price: 15000,
    currency: 'EGP',
    area: 80,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Nasr City',
      address: 'City Stars Mall',
      lat: 30.0698,
      lng: 31.3452
    },
    amenities: ['air-conditioning', 'security', 'mall-access'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-12',
    updatedAt: '2024-03-28'
  },

  {
    id: 'prop-016',
    title: 'Plot in New Administrative Capital',
    description: 'Investment opportunity in new capital.',
    type: 'land',
    status: 'for-sale',
    price: 8000000,
    currency: 'EGP',
    area: 300,
    location: {
      country: 'Egypt',
      city: 'New Administrative Capital',
      district: 'Government District',
      address: 'Plot 45',
      lat: 30.0259,
      lng: 31.7502
    },
    amenities: ['utilities', 'road-access'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-22',
    updatedAt: '2024-04-02'
  },

  {
    id: 'prop-017',
    title: 'Furnished Apartment in October City',
    description: 'Fully furnished ready to move in.',
    type: 'apartment',
    status: 'for-rent',
    price: 12000,
    currency: 'EGP',
    area: 140,
    bedrooms: 2,
    bathrooms: 2,
    floor: 6,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: '6th of October City',
      address: 'El Wahat Road',
      lat: 29.9365,
      lng: 30.9219
    },
    amenities: ['furnished', 'parking', 'elevator', 'security', 'pool'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-18',
    updatedAt: '2024-04-06'
  },

  {
    id: 'prop-018',
    title: 'Penthouse in Porto Marina',
    description: 'Luxury penthouse with sea view.',
    type: 'apartment',
    status: 'for-sale',
    price: 9500000,
    currency: 'EGP',
    area: 240,
    bedrooms: 3,
    bathrooms: 3,
    floor: 10,
    location: {
      country: 'Egypt',
      city: 'North Coast',
      district: 'Porto Marina',
      address: 'Tower A',
      lat: 30.9820,
      lng: 28.6425
    },
    amenities: ['sea-view', 'pool', 'gym', 'security', 'beach-access'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-05',
    updatedAt: '2024-04-13'
  },

  {
    id: 'prop-019',
    title: 'Villa Compound in Katameya',
    description: 'Family villa in secure compound.',
    type: 'villa',
    status: 'for-sale',
    price: 16000000,
    currency: 'EGP',
    area: 350,
    bedrooms: 4,
    bathrooms: 4,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Katameya',
      address: 'Katameya Heights',
      lat: 29.9773,
      lng: 31.4428
    },
    amenities: ['compound', 'pool', 'gym', 'security', 'parking'],
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-28',
    updatedAt: '2024-03-22'
  },

  {
    id: 'prop-020',
    title: 'Office in Mohandessin',
    description: 'Central location for business.',
    type: 'office',
    status: 'for-rent',
    price: 18000,
    currency: 'EGP',
    area: 100,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Mohandessin',
      address: 'Gamet El Dowal Street',
      lat: 30.0561,
      lng: 31.2009
    },
    amenities: ['parking', 'elevator', 'security', 'internet'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-08',
    updatedAt: '2024-04-04'
  },

  {
    id: 'prop-021',
    title: 'Apartment with Balcony in Dokki',
    description: 'Sunny apartment with large balcony.',
    type: 'apartment',
    status: 'for-sale',
    price: 3800000,
    currency: 'EGP',
    area: 95,
    bedrooms: 2,
    bathrooms: 1,
    floor: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Dokki',
      address: 'El Batal Ahmed Abdel Aziz Street',
      lat: 30.0408,
      lng: 31.2059
    },
    amenities: ['balcony', 'parking', 'elevator'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-14',
    updatedAt: '2024-03-18'
  },

  {
    id: 'prop-022',
    title: 'Farmhouse in Alamein',
    description: 'Peaceful farmhouse near sea.',
    type: 'villa',
    status: 'for-rent',
    price: 35000,
    currency: 'EGP',
    area: 400,
    bedrooms: 5,
    bathrooms: 4,
    location: {
      country: 'Egypt',
      city: 'Alamein',
      district: 'New Alamein',
      address: 'Agricultural Road',
      lat: 30.8300,
      lng: 28.9500
    },
    amenities: ['garden', 'pool', 'parking', 'farmland', 'security'],
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-25',
    updatedAt: '2024-04-01'
  },

  {
    id: 'prop-023',
    title: 'Duplex Apartment in Nasr City',
    description: 'Spacious duplex with separate entrance.',
    type: 'apartment',
    status: 'for-sale',
    price: 6800000,
    currency: 'EGP',
    area: 180,
    bedrooms: 3,
    bathrooms: 3,
    floor: 7,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Nasr City',
      address: 'Abbas El Akkad Street',
      lat: 30.0612,
      lng: 31.3350
    },
    amenities: ['duplex', 'parking', 'elevator', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-12',
    updatedAt: '2024-04-07'
  },

  {
    id: 'prop-024',
    title: 'Commercial Building in Alexandria',
    description: '4-story commercial building.',
    type: 'office',
    status: 'for-sale',
    price: 25000000,
    currency: 'EGP',
    area: 800,
    location: {
      country: 'Egypt',
      city: 'Alexandria',
      district: 'Smouha',
      address: 'El Gaish Road',
      lat: 31.2001,
      lng: 29.9187
    },
    amenities: ['elevator', 'parking', 'security', 'shops'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-08',
    updatedAt: '2024-04-10'
  },

  {
    id: 'prop-025',
    title: 'Residential Plot in Shorouk City',
    description: 'Ideal for villa construction.',
    type: 'land',
    status: 'for-sale',
    price: 4200000,
    currency: 'EGP',
    area: 250,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Shorouk City',
      address: 'Sector 5',
      lat: 30.1215,
      lng: 31.6352
    },
    amenities: ['utilities', 'road-access'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-17',
    updatedAt: '2024-03-24'
  },

  {
    id: 'prop-026',
    title: 'Studio in Student Area',
    description: 'Perfect for students near universities.',
    type: 'apartment',
    status: 'for-rent',
    price: 5000,
    currency: 'EGP',
    area: 50,
    bedrooms: 0,
    bathrooms: 1,
    floor: 2,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: 'Haram',
      address: 'Faisal Street',
      lat: 29.9911,
      lng: 31.1408
    },
    amenities: ['furnished', 'internet', 'security'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-22',
    updatedAt: '2024-04-05'
  },

  {
    id: 'prop-027',
    title: 'Villa with Private Cinema',
    description: 'Entertainment villa with home theater.',
    type: 'villa',
    status: 'for-sale',
    price: 28000000,
    currency: 'EGP',
    area: 500,
    bedrooms: 6,
    bathrooms: 5,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Mostakbal City',
      address: 'Golden Square',
      lat: 30.0851,
      lng: 31.4527
    },
    amenities: ['cinema', 'pool', 'gym', 'sauna', 'security', 'garden'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-12',
    updatedAt: '2024-04-08'
  },

  {
    id: 'prop-028',
    title: 'Medical Clinic in Maadi',
    description: 'Fully equipped medical clinic.',
    type: 'office',
    status: 'for-rent',
    price: 22000,
    currency: 'EGP',
    area: 150,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Maadi',
      address: 'Road 9',
      lat: 29.9668,
      lng: 31.2500
    },
    amenities: ['medical-equipment', 'parking', 'waiting-area', 'security'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-18',
    updatedAt: '2024-03-30'
  },

  {
    id: 'prop-029',
    title: 'Apartment with Roof Garden',
    description: 'Last floor with private roof garden.',
    type: 'apartment',
    status: 'for-sale',
    price: 7500000,
    currency: 'EGP',
    area: 160,
    bedrooms: 3,
    bathrooms: 2,
    floor: 8,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Madinty',
      address: 'Central Park',
      lat: 30.1189,
      lng: 31.4046
    },
    amenities: ['roof-garden', 'parking', 'elevator', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-03',
    updatedAt: '2024-04-09'
  },

  {
    id: 'prop-030',
    title: 'Beach Land in Ras Sudr',
    description: 'Direct beachfront investment land.',
    type: 'land',
    status: 'for-sale',
    price: 15000000,
    currency: 'EGP',
    area: 600,
    location: {
      country: 'Egypt',
      city: 'Ras Sudr',
      district: 'Beach Front',
      address: 'Km 80',
      lat: 29.5917,
      lng: 32.7142
    },
    amenities: ['beach-access', 'road-access'],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-30',
    updatedAt: '2024-04-06'
  },

  {
    id: 'prop-031',
    title: 'Modern Office in New Capital Business District',
    description: 'Grade A office space with smart features.',
    type: 'office',
    status: 'for-rent',
    price: 40000,
    currency: 'EGP',
    area: 200,
    location: {
      country: 'Egypt',
      city: 'New Administrative Capital',
      district: 'Business District',
      address: 'Iconic Tower',
      lat: 30.0259,
      lng: 31.7502
    },
    amenities: ['smart-building', 'parking', 'conference-rooms', 'cafeteria', 'gym'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-22',
    updatedAt: '2024-04-11'
  },

  {
    id: 'prop-032',
    title: 'Family Apartment in Agouza',
    description: 'Spacious apartment in central location.',
    type: 'apartment',
    status: 'for-sale',
    price: 3200000,
    currency: 'EGP',
    area: 130,
    bedrooms: 3,
    bathrooms: 2,
    floor: 4,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Agouza',
      address: 'Nile Street',
      lat: 30.0495,
      lng: 31.2209
    },
    amenities: ['parking', 'elevator', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-14',
    updatedAt: '2024-04-03'
  },

  {
    id: 'prop-033',
    title: 'Villa in Palm Hills October',
    description: 'Luxury villa in gated community.',
    type: 'villa',
    status: 'for-sale',
    price: 19000000,
    currency: 'EGP',
    area: 380,
    bedrooms: 5,
    bathrooms: 4,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: 'Palm Hills October',
      address: 'Villa 45',
      lat: 29.9500,
      lng: 30.9200
    },
    amenities: ['golf-course', 'pool', 'security', 'gym', 'clubhouse'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-08',
    updatedAt: '2024-04-12'
  },

  {
    id: 'prop-034',
    title: 'Retail Space in Mall of Arabia',
    description: 'High foot traffic retail location.',
    type: 'office',
    status: 'for-rent',
    price: 28000,
    currency: 'EGP',
    area: 120,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: 'Mall of Arabia',
      address: 'First Floor',
      lat: 29.9653,
      lng: 31.0156
    },
    amenities: ['mall-location', 'air-conditioning', 'security', 'parking'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-28',
    updatedAt: '2024-04-04'
  },

  {
    id: 'prop-035',
    title: 'Agricultural Land in Ismailia',
    description: 'Fertile land with irrigation system.',
    type: 'land',
    status: 'for-sale',
    price: 2500000,
    currency: 'EGP',
    area: 800,
    location: {
      country: 'Egypt',
      city: 'Ismailia',
      district: 'Agricultural Area',
      address: 'Near Canal',
      lat: 30.5833,
      lng: 32.2667
    },
    amenities: ['irrigation', 'water-access', 'road-access'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-19',
    updatedAt: '2024-03-27'
  },

  {
    id: 'prop-036',
    title: 'Penthouse in Four Seasons Nile Plaza',
    description: 'Ultra luxury penthouse in 5-star hotel.',
    type: 'apartment',
    status: 'for-sale',
    price: 35000000,
    currency: 'EGP',
    area: 350,
    bedrooms: 4,
    bathrooms: 4,
    floor: 15,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Garden City',
      address: 'Four Seasons Hotel',
      lat: 30.0400,
      lng: 31.2289
    },
    amenities: ['hotel-services', 'nile-view', 'pool', 'gym', 'spa', 'security'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-04-13'
  },

  {
    id: 'prop-037',
    title: 'Villa for Short Term Rent in Hurghada',
    description: 'Furnished villa for holiday rentals.',
    type: 'villa',
    status: 'for-rent',
    price: 60000,
    currency: 'EGP',
    area: 300,
    bedrooms: 4,
    bathrooms: 3,
    location: {
      country: 'Egypt',
      city: 'Hurghada',
      district: 'Sahl Hasheesh',
      address: 'Beach Resort',
      lat: 27.2579,
      lng: 33.8116
    },
    amenities: ['beach-access', 'pool', 'furnished', 'kitchen', 'wifi'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-03-07',
    updatedAt: '2024-04-10'
  },

  {
    id: 'prop-038',
    title: 'Office in Arkan Plaza',
    description: 'Modern office in commercial complex.',
    type: 'office',
    status: 'for-rent',
    price: 32000,
    currency: 'EGP',
    area: 180,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Sheikh Zayed',
      address: 'Arkan Plaza',
      lat: 30.0150,
      lng: 31.0725
    },
    amenities: ['mall-access', 'parking', 'security', 'internet'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-16',
    updatedAt: '2024-04-01'
  },

  {
    id: 'prop-039',
    title: 'Apartment in New Giza',
    description: 'Modern apartment with mountain view.',
    type: 'apartment',
    status: 'for-sale',
    price: 5200000,
    currency: 'EGP',
    area: 140,
    bedrooms: 2,
    bathrooms: 2,
    floor: 6,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: 'New Giza',
      address: 'Residential District',
      lat: 29.9861,
      lng: 31.1417
    },
    amenities: ['mountain-view', 'parking', 'pool', 'gym', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-25',
    updatedAt: '2024-04-07'
  },

  {
    id: 'prop-040',
    title: 'Commercial Land in Sadat City',
    description: 'Ideal for factory or warehouse.',
    type: 'land',
    status: 'for-sale',
    price: 6000000,
    currency: 'EGP',
    area: 1000,
    location: {
      country: 'Egypt',
      city: 'Sadat City',
      district: 'Industrial Zone',
      address: 'Plot 120',
      lat: 30.3667,
      lng: 30.5167
    },
    amenities: ['industrial-zone', 'road-access', 'utilities'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-14',
    updatedAt: '2024-03-29'
  },

  {
    id: 'prop-041',
    title: 'Studio in Nasr City',
    description: 'Affordable studio for young professionals.',
    type: 'apartment',
    status: 'for-rent',
    price: 4500,
    currency: 'EGP',
    area: 55,
    bedrooms: 0,
    bathrooms: 1,
    floor: 2,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Nasr City',
      address: 'Hassan El Maamoun Street',
      lat: 30.0556,
      lng: 31.3344
    },
    amenities: ['furnished', 'internet', 'security'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-20',
    updatedAt: '2024-04-05'
  },

  {
    id: 'prop-042',
    title: 'Villa with Tennis Court',
    description: 'Sports villa with private tennis court.',
    type: 'villa',
    status: 'for-sale',
    price: 24000000,
    currency: 'EGP',
    area: 420,
    bedrooms: 5,
    bathrooms: 4,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Beverly Hills',
      address: 'El Hosary Street',
      lat: 30.0465,
      lng: 31.0007
    },
    amenities: ['tennis-court', 'pool', 'gym', 'security', 'garden'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-04',
    updatedAt: '2024-04-08'
  },

  {
    id: 'prop-043',
    title: 'Medical Center in Zamalek',
    description: 'Premium location for medical practice.',
    type: 'office',
    status: 'for-rent',
    price: 45000,
    currency: 'EGP',
    area: 250,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Zamalek',
      address: '26th July Street',
      lat: 30.0613,
      lng: 31.2208
    },
    amenities: ['medical', 'parking', 'elevator', 'security'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-27',
    updatedAt: '2024-04-02'
  },

  {
    id: 'prop-044',
    title: 'Apartment with Maid Room',
    description: 'Family apartment with separate maid room.',
    type: 'apartment',
    status: 'for-sale',
    price: 5800000,
    currency: 'EGP',
    area: 170,
    bedrooms: 3,
    bathrooms: 2,
    floor: 5,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Madinty',
      address: 'District 8',
      lat: 30.1189,
      lng: 31.4046
    },
    amenities: ['maid-room', 'parking', 'elevator', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-09',
    updatedAt: '2024-04-06'
  },

  {
    id: 'prop-045',
    title: 'Touristic Land in Sharm El Sheikh',
    description: 'Perfect for hotel or resort development.',
    type: 'land',
    status: 'for-sale',
    price: 35000000,
    currency: 'EGP',
    area: 2000,
    location: {
      country: 'Egypt',
      city: 'Sharm El Sheikh',
      district: 'Naama Bay',
      address: 'Sea Front',
      lat: 27.9158,
      lng: 34.3294
    },
    amenities: ['sea-view', 'beach-access', 'road-access'],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-23',
    updatedAt: '2024-04-11'
  },

  {
    id: 'prop-046',
    title: 'Office in Nile City Towers',
    description: 'Prestigious business address.',
    type: 'office',
    status: 'for-rent',
    price: 60000,
    currency: 'EGP',
    area: 220,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Corniche El Nil',
      address: 'Nile City Towers',
      lat: 30.0450,
      lng: 31.2250
    },
    amenities: ['river-view', 'parking', 'gym', 'conference-rooms', 'security'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-11',
    updatedAt: '2024-04-09'
  },

  {
    id: 'prop-047',
    title: 'Family Apartment in Heliopolis',
    description: 'Quiet residential area near schools.',
    type: 'apartment',
    status: 'for-sale',
    price: 4200000,
    currency: 'EGP',
    area: 150,
    bedrooms: 3,
    bathrooms: 2,
    floor: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Heliopolis',
      address: 'El Nozha Street',
      lat: 30.0971,
      lng: 31.3269
    },
    amenities: ['parking', 'elevator', 'security', 'near-schools'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-17',
    updatedAt: '2024-04-04'
  },

  {
    id: 'prop-048',
    title: 'Villa in Al Rehab with Pool House',
    description: 'Entertainment villa with separate pool house.',
    type: 'villa',
    status: 'for-sale',
    price: 17000000,
    currency: 'EGP',
    area: 360,
    bedrooms: 4,
    bathrooms: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Al Rehab',
      address: 'District 8',
      lat: 30.0643,
      lng: 31.4946
    },
    amenities: ['pool-house', 'garden', 'parking', 'security'],
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-24',
    updatedAt: '2024-04-03'
  },

  {
    id: 'prop-049',
    title: 'Showroom in Auto Mall',
    description: 'Car showroom in automotive complex.',
    type: 'office',
    status: 'for-rent',
    price: 38000,
    currency: 'EGP',
    area: 300,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Katameya',
      address: 'Auto Mall',
      lat: 29.9773,
      lng: 31.4428
    },
    amenities: ['showroom', 'parking', 'security', 'high-ceiling'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-31',
    updatedAt: '2024-04-01'
  },

  {
    id: 'prop-050',
    title: 'Residential Plot in Badr City',
    description: 'Affordable land for housing project.',
    type: 'land',
    status: 'for-sale',
    price: 1800000,
    currency: 'EGP',
    area: 200,
    location: {
      country: 'Egypt',
      city: 'Badr City',
      district: 'Residential Area',
      address: 'Sector 3',
      lat: 30.1333,
      lng: 31.7333
    },
    amenities: ['utilities', 'road-access'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-04',
    updatedAt: '2024-04-07'
  },

  {
    id: 'prop-051',
    title: 'Luxury Apartment in Stella Di Mare',
    description: 'Beachfront apartment in resort community.',
    type: 'apartment',
    status: 'for-sale',
    price: 11000000,
    currency: 'EGP',
    area: 220,
    bedrooms: 3,
    bathrooms: 3,
    floor: 7,
    location: {
      country: 'Egypt',
      city: 'North Coast',
      district: 'Stella Di Mare',
      address: 'Beach Tower',
      lat: 30.9845,
      lng: 28.6432
    },
    amenities: ['beach-access', 'pool', 'gym', 'spa', 'security'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-07',
    updatedAt: '2024-04-12'
  },

  {
    id: 'prop-052',
    title: 'Villa for Events in October',
    description: 'Large villa suitable for events and weddings.',
    type: 'villa',
    status: 'for-rent',
    price: 80000,
    currency: 'EGP',
    area: 600,
    bedrooms: 6,
    bathrooms: 5,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: '6th of October City',
      address: 'Event Gardens',
      lat: 29.9365,
      lng: 30.9219
    },
    amenities: ['event-space', 'garden', 'parking', 'kitchen', 'security'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-13',
    updatedAt: '2024-04-08'
  },

  {
    id: 'prop-053',
    title: 'Co-working Space in Downtown',
    description: 'Modern co-working space for startups.',
    type: 'office',
    status: 'for-rent',
    price: 12000,
    currency: 'EGP',
    area: 150,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Downtown',
      address: 'Kasr El Nil Street',
      lat: 30.0444,
      lng: 31.2357
    },
    amenities: ['co-working', 'internet', 'meeting-rooms', 'cafeteria', 'printing'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-19',
    updatedAt: '2024-04-05'
  },

  {
    id: 'prop-054',
    title: 'Renovated Apartment in Old Cairo',
    description: 'Recently renovated with modern finishes.',
    type: 'apartment',
    status: 'for-sale',
    price: 2500000,
    currency: 'EGP',
    area: 90,
    bedrooms: 2,
    bathrooms: 1,
    floor: 2,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Old Cairo',
      address: 'El Moez Street',
      lat: 30.0444,
      lng: 31.2517
    },
    amenities: ['renovated', 'historic-area', 'parking'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-26',
    updatedAt: '2024-04-09'
  },

  {
    id: 'prop-055',
    title: 'Industrial Land in 6th of October',
    description: 'Zoned for industrial use.',
    type: 'land',
    status: 'for-sale',
    price: 8500000,
    currency: 'EGP',
    area: 1200,
    location: {
      country: 'Egypt',
      city: 'Giza',
      district: '6th of October Industrial Zone',
      address: 'Second Industrial Zone',
      lat: 29.9667,
      lng: 30.9500
    },
    amenities: ['industrial', 'road-access', 'utilities', 'loading-dock'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-16',
    updatedAt: '2024-03-31'
  },

  {
    id: 'prop-056',
    title: 'Serviced Apartment in Fairmont Nile City',
    description: 'Hotel apartment with full services.',
    type: 'apartment',
    status: 'for-rent',
    price: 55000,
    currency: 'EGP',
    area: 130,
    bedrooms: 2,
    bathrooms: 2,
    floor: 12,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Corniche El Nil',
      address: 'Fairmont Hotel',
      lat: 30.0450,
      lng: 31.2250
    },
    amenities: ['hotel-services', 'nile-view', 'gym', 'pool', 'cleaning'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-03',
    updatedAt: '2024-04-10'
  },

  {
    id: 'prop-057',
    title: 'Villa with Private Beach in North Coast',
    description: 'Exclusive beachfront property.',
    type: 'villa',
    status: 'for-sale',
    price: 32000000,
    currency: 'EGP',
    area: 450,
    bedrooms: 5,
    bathrooms: 4,
    location: {
      country: 'Egypt',
      city: 'North Coast',
      district: 'Marassi',
      address: 'Private Beach',
      lat: 30.9850,
      lng: 28.6420
    },
    amenities: ['private-beach', 'pool', 'garden', 'security', 'dock'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-11',
    updatedAt: '2024-04-13'
  },

  {
    id: 'prop-058',
    title: 'Dental Clinic in Maadi',
    description: 'Fully equipped dental practice.',
    type: 'office',
    status: 'for-rent',
    price: 18000,
    currency: 'EGP',
    area: 110,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Maadi',
      address: 'Road 9',
      lat: 29.9668,
      lng: 31.2500
    },
    amenities: ['dental-equipment', 'waiting-room', 'parking', 'x-ray'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-11',
    updatedAt: '2024-04-04'
  },

  {
    id: 'prop-059',
    title: 'Penthouse in Palm Hills Katameya',
    description: 'Top floor with panoramic views.',
    type: 'apartment',
    status: 'for-sale',
    price: 14500000,
    currency: 'EGP',
    area: 280,
    bedrooms: 4,
    bathrooms: 3,
    floor: 10,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Katameya',
      address: 'Palm Hills Resort',
      lat: 29.9773,
      lng: 31.4428
    },
    amenities: ['panoramic-view', 'pool', 'gym', 'security', 'garden-access'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-17',
    updatedAt: '2024-04-11'
  },

  {
    id: 'prop-060',
    title: 'Commercial Plot in New Capital',
    description: 'Strategic location for commercial development.',
    type: 'land',
    status: 'for-sale',
    price: 45000000,
    currency: 'EGP',
    area: 800,
    location: {
      country: 'Egypt',
      city: 'New Administrative Capital',
      district: 'Central Business District',
      address: 'Plot C12',
      lat: 30.0259,
      lng: 31.7502
    },
    amenities: ['commercial-zone', 'road-access', 'utilities'],
    images: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-29',
    updatedAt: '2024-04-12'
  },

  {
    id: 'prop-061',
    title: 'Studio near American University',
    description: 'Perfect for students and faculty.',
    type: 'apartment',
    status: 'for-rent',
    price: 7000,
    currency: 'EGP',
    area: 65,
    bedrooms: 0,
    bathrooms: 1,
    floor: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Tahrir Square',
      address: 'Mohamed Mahmoud Street',
      lat: 30.0444,
      lng: 31.2357
    },
    amenities: ['near-auc', 'furnished', 'internet', 'security'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-19',
    updatedAt: '2024-04-06'
  },

  {
    id: 'prop-062',
    title: 'Villa with Indoor Pool',
    description: 'Year-round swimming with indoor pool.',
    type: 'villa',
    status: 'for-sale',
    price: 26000000,
    currency: 'EGP',
    area: 400,
    bedrooms: 4,
    bathrooms: 3,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Beverly Hills',
      address: 'El Hosary Street',
      lat: 30.0465,
      lng: 31.0007
    },
    amenities: ['indoor-pool', 'gym', 'sauna', 'security', 'garden'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-06',
    updatedAt: '2024-04-09'
  },

  {
    id: 'prop-063',
    title: 'Law Firm Office in Zamalek',
    description: 'Prestigious office for legal practice.',
    type: 'office',
    status: 'for-rent',
    price: 35000,
    currency: 'EGP',
    area: 180,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Zamalek',
      address: '26th July Street',
      lat: 30.0613,
      lng: 31.2208
    },
    amenities: ['library', 'conference-room', 'parking', 'security'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-01-24',
    updatedAt: '2024-04-03'
  },

  {
    id: 'prop-064',
    title: 'Apartment with Private Elevator',
    description: 'Direct elevator access to apartment.',
    type: 'apartment',
    status: 'for-sale',
    price: 9500000,
    currency: 'EGP',
    area: 190,
    bedrooms: 3,
    bathrooms: 2,
    floor: 6,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Zamalek',
      address: 'Shagarat El Dor Street',
      lat: 30.0613,
      lng: 31.2208
    },
    amenities: ['private-elevator', 'parking', 'security', 'river-view'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-03-02',
    updatedAt: '2024-04-08'
  },

  {
    id: 'prop-065',
    title: 'Farmland in Delta Region',
    description: 'Agricultural land with fruit trees.',
    type: 'land',
    status: 'for-sale',
    price: 1800000,
    currency: 'EGP',
    area: 1500,
    location: {
      country: 'Egypt',
      city: 'Mansoura',
      district: 'Agricultural Area',
      address: 'Nile Delta',
      lat: 31.0409,
      lng: 31.3785
    },
    amenities: ['fruit-trees', 'irrigation', 'water-access', 'farm-house'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-02-13',
    updatedAt: '2024-04-02'
  },

  {
    id: 'prop-066',
    title: 'Apartment in Royal Maxim Palace Kempinski',
    description: 'Luxury apartment in 5-star hotel residence.',
    type: 'apartment',
    status: 'for-sale',
    price: 28000000,
    currency: 'EGP',
    area: 320,
    bedrooms: 4,
    bathrooms: 4,
    floor: 8,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'New Cairo',
      address: 'Royal Maxim Palace',
      lat: 30.0131,
      lng: 31.4199
    },
    amenities: ['hotel-residence', 'pool', 'gym', 'spa', 'security', 'concierge'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-07',
    updatedAt: '2024-04-13'
  },

  {
    id: 'prop-067',
    title: 'Villa for Corporate Retreat',
    description: 'Large villa suitable for corporate events.',
    type: 'villa',
    status: 'for-rent',
    price: 120000,
    currency: 'EGP',
    area: 700,
    bedrooms: 8,
    bathrooms: 6,
    location: {
      country: 'Egypt',
      city: 'North Coast',
      district: 'Hacienda Bay',
      address: 'Corporate Retreat Area',
      lat: 30.9830,
      lng: 28.6410
    },
    amenities: ['conference-room', 'pool', 'garden', 'kitchen', 'wifi', 'security'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-21',
    updatedAt: '2024-04-10'
  },

  {
    id: 'prop-068',
    title: 'Photography Studio in Downtown',
    description: 'Creative space with natural light.',
    type: 'office',
    status: 'for-rent',
    price: 22000,
    currency: 'EGP',
    area: 200,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Downtown',
      address: 'Adly Street',
      lat: 30.0444,
      lng: 31.2357
    },
    amenities: ['studio-lighting', 'changing-room', 'parking', 'high-ceiling'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-16',
    updatedAt: '2024-04-05'
  },

  {
    id: 'prop-069',
    title: 'Apartment with Smart Home System',
    description: 'Fully automated smart home.',
    type: 'apartment',
    status: 'for-sale',
    price: 12500000,
    currency: 'EGP',
    area: 210,
    bedrooms: 3,
    bathrooms: 3,
    floor: 9,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'New Cairo',
      address: 'Uptown Cairo',
      lat: 30.0131,
      lng: 31.4199
    },
    amenities: ['smart-home', 'parking', 'gym', 'pool', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-09',
    updatedAt: '2024-04-11'
  },

  {
    id: 'prop-070',
    title: 'Investment Land in Red Sea',
    description: 'Touristic development opportunity.',
    type: 'land',
    status: 'for-sale',
    price: 55000000,
    currency: 'EGP',
    area: 3000,
    location: {
      country: 'Egypt',
      city: 'Red Sea',
      district: 'Sahl Hasheesh',
      address: 'Development Zone',
      lat: 27.2579,
      lng: 33.8116
    },
    amenities: ['sea-view', 'beach-access', 'road-access', 'utilities'],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-01-13',
    updatedAt: '2024-04-12'
  },

  {
    id: 'prop-071',
    title: 'Loft Apartment in Industrial Area',
    description: 'Converted industrial space with high ceilings.',
    type: 'apartment',
    status: 'for-rent',
    price: 15000,
    currency: 'EGP',
    area: 160,
    bedrooms: 1,
    bathrooms: 1,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Mokattam',
      address: 'Industrial Zone',
      lat: 29.9668,
      lng: 31.3201
    },
    amenities: ['high-ceiling', 'industrial-style', 'parking', 'security'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop'
    ],
    isFeatured: false,
    createdAt: '2024-03-23',
    updatedAt: '2024-04-07'
  },

  {
    id: 'prop-072',
    title: 'Villa with Wine Cellar',
    description: 'Luxury villa with temperature-controlled wine cellar.',
    type: 'villa',
    status: 'for-sale',
    price: 29500000,
    currency: 'EGP',
    area: 480,
    bedrooms: 5,
    bathrooms: 5,
    location: {
      country: 'Egypt',
      city: 'Cairo',
      district: 'Zamalek',
      address: 'Gezeira Street',
      lat: 30.0613,
      lng: 31.2208
    },
    amenities: ['wine-cellar', 'pool', 'gym', 'security', 'garden'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop'
    ],
    isFeatured: true,
    createdAt: '2024-02-02',
    updatedAt: '2024-04-13'
  }
];

import React from 'react';
import Helmet from 'components/Helmet.component';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { smmListData } from '../data/smmList.data';


const SmmList = () => {
  const columns = [
    {
      Header: 'Site',
      accessor: 'site',
      sortable: false,
      Cell: cellProps => <a href={ cellProps.value }>{cellProps.value}</a>,
    },
    {
      Header: 'Logo',
      accessor: 'logo',
      sortable: false,
      Cell: cellProps => <Image src={ cellProps.value } />,
    },
    {
      Header: 'Name',
      accessor: 'name',
      sortable: false,
    },
    {
      Header: 'Description',
      accessor: 'description',
      sortable: false,
    },
    {
      Header: 'Page (Get now)',
      accessor: 'page',
      sortable: false,
      Cell: cellProps => <a href={ cellProps.value }>{cellProps.value}</a>,
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
      sortable: false,
    },
    {
      Header: 'Frequency',
      accessor: 'frequency',
      sortable: false,
    },
    {
      id: 'timeDeliveryId',
      Header: 'Time Delivery',
      accessor: d => d.timeDeliveryValue,
      Cell: (cellProps) => {
        return (<div>{cellProps.original.timeDelivery}</div>);
      },
      sortMethod: (a, b) => {
        if (a === b) {
          return a > b ? 1 : -1;
        }
        return a > b ? 1 : -1;
      },
      sortable: true,
    },
    {
      Header: 'Email',
      accessor: 'email',
      sortable: false,
    },
    {
      Header: 'Overall Rating',
      accessor: 'rating',
      sortable: true,
    },
  ];

  return (
    <ReactTable
      data={ smmListData }
      columns={ columns }
    />
  );
};

export default () => (
  <React.Fragment>
    <Helmet
      title='Marketing-tools page title'
      metaDescription='Marketing-tools Contact page description'
      linkCanonical='marketing-tools.html'

      facebookTitle='Marketing-tools Home Social Media Management Tools Listing'
      facebookDescription='Marketing-tools Home Social Media Management Tools Listing - List Your Service there'
      facebookSiteName='Marketing-tools Home Social Media Management Tools Listing'
      facebookImagePath='Marketing-tools Home image path'

      twitterCard='Marketing-tools Home summary'
      twitterDescription='Marketing-tools Home Social Media Management Tools Listing - List Your Service there'
      twitterTitle='Marketing-tools Home Social Media Management Tools Listing'
      twitterImage='Marketing-tools Home image path'
    />
    <Container>
      <p>Marketing tools.</p>
      <div>SMM table list</div>
      <SmmList />
    </Container>
  </React.Fragment>
);

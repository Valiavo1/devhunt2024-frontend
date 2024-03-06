import React from 'react'
import CIcon from '@coreui/icons-react'
import {cibMysql, cibOracle, cibPostgresql, cilMonitor, cilSpeedometer, cilStorage, cilUser} from '@coreui/icons'
import {CNavGroup, CNavItem, CNavTitle} from '@coreui/react'
import Icon from "./assets/icon/Icon";
import {
  CodeIcon,
  ElasticSearchIcon,
  key,
  LambdaIcon,
  OSIcon,
  RunListIcon,
  SoftwareIcon,
  SQLServerIcon,
  TalendIcon,
  WSO2Icon
} from "./assets/icon/IconeFile";

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
    badge: {
      color: 'success',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/admin/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
  },
  {
    component: CNavItem,
    name: 'Authorization',
    to: '/admin/authorization',
    icon: <Icon icon={key} className="nav-icon"/>,
  },
  {
    component: CNavItem,
    name: 'Side',
    to: '/admin/side',
    icon: <Icon icon={key} className="nav-icon"/>,
  },
  {
    component: CNavGroup,
    name: 'Lambda',
    to: '/admin/lambda',
    icon: <Icon icon={LambdaIcon} className="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Template',
        to: '/admin/lambda/template',
        icon: <Icon icon={CodeIcon} className="nav-icon"/>,
      },
      {
        component: CNavItem,
        name: 'List Lambda',
        to: '/admin/lambda/list',
        icon: <Icon icon={RunListIcon} className="nav-icon"/>,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'PROPOSAL',
  },
  {
    component: CNavItem,
    name: 'ECI Type',
    to: '/admin/proposal/ECI',
    icon: <CIcon icon={cilMonitor} customClassName="nav-icon"/>,
  },
  {
    component: CNavItem,
    name: 'Images',
    to: '/admin/proposal/images',
    icon: <Icon icon={OSIcon} className="nav-icon"/>,
  },
  {
    component: CNavGroup,
    name: 'DBaaS',
    to: '/admin/proposal/dbaas',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'MySQL proposal',
        to: '/admin/proposal/dbaas/MySQLProposal',
        icon: <CIcon icon={cibMysql} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'Postgres proposal',
        to: '/admin/proposal/dbaas/PostgresProposal',
        icon: <CIcon icon={cibPostgresql} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'Oracle proposal',
        to: '/admin/proposal/dbaas/OracleProposal',
        icon: <CIcon icon={cibOracle} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'SQL Server proposal',
        to: '/admin/proposal/dbaas/SQLServerProposal',
        icon: <Icon icon={SQLServerIcon} className="nav-icon"/>
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Software',
    to: '/admin/proposal/software',
    icon: <Icon icon={SoftwareIcon} className="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'WSO2',
        to: '/admin/proposal/software/WSO2',
        icon: <Icon icon={WSO2Icon} className="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'Talend',
        to: '/admin/proposal/software/Talend',
        icon: <Icon icon={TalendIcon} className="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'Elastic Search',
        to: '/admin/proposal/software/ElasticSearch',
        icon: <Icon icon={ElasticSearchIcon} className="nav-icon"/>
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'USAGE',
  },
  {
    component: CNavItem,
    name: 'ECI',
    to: '/admin/usage/ECI',
    icon: <CIcon icon={cilMonitor} customClassName="nav-icon"/>,
  },
  {
    component: CNavGroup,
    name: 'DBaaS',
    to: '/admin/usage/dbaas',
    icon: <CIcon icon={cilStorage} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'MySQL usage',
        to: '/admin/usage/dbaas/MySQLUsage',
        icon: <CIcon icon={cibMysql} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'Postgres usage',
        to: '/admin/usage/dbaas/PostgresUsage',
        icon: <CIcon icon={cibPostgresql} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'Oracle usage',
        to: '/admin/usage/dbaas/OracleUsage',
        icon: <CIcon icon={cibOracle} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,
        name: 'SQL Server usage',
        to: '/admin/usage/dbaas/SQLServerUsage',
        icon: <Icon icon={SQLServerIcon} className="nav-icon"/>
      },
    ],
  },
]

export default _nav

import OverviewIcon from '../assets/images/svg/sidebarIcons/ri_dashboard-2-line.svg'
import CampaignIcon from '../assets/images/svg/sidebarIcons/material-symbols_campaign-outline.svg'
import MarkIntelIcon from '../assets/images/svg/sidebarIcons/fluent-mdl2_insights.svg'
import AcctSettIcon from '../assets/images/svg/sidebarIcons/ep_setting.svg'


export const menu = [
    {
        id: 1,
        url: '/',
        icon: OverviewIcon,
        title: 'Overview',
    },
    {
        id: 2,
        url: '/campaign',
        icon: CampaignIcon,
        title: 'Campaign',
    },
    {
        id: 3,
        url: '/',
        icon: MarkIntelIcon,
        title: 'Market Intelligence',
    },
    {
        id: 1,
        url: '/',
        icon: AcctSettIcon,
        title: 'Account Settings',
    },
];
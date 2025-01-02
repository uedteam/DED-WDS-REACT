// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@style/globals.scss';
import 'vanillajs-datepicker/css/datepicker-foundation.css';
import '../../index.css';
import './app.scss';

import {
  Layout,
  Navbar,
  SideNav,
  Breadcrumb,
  Title,
  Tag,
  Card,
  Divider,
  StatusIndicator,
  Button,
} from '@src/ui';
import { Grid, Row, Column } from '@src/ui/section/grid';
import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

import {
  SvgAuo,
  SvgHome,
  SvgBarChart,
  SvgCalendar,
  SvgFavorite,
  SvgNotification,
  SvgDatabase,
  SvgUser,
  SvgLanguage,
  SvgLocation,
  SvgInfoCircle,
  SvgMoreVert,
  SvgSearch,
  SvgSettings,
} from '@src/assets';

import { AreaPowerCard } from '../elements/area-power-card/area-power-card';
import { useCounter } from '../hooks/useCounter';
import { formatToThousand } from '../utils/number';
import { useEffect } from 'react';

const chartOptions = {
  chart: {
    type: 'column',
    height: 280,
    spacing: [20, 20, 20, 20],
  },
  title: {
    text: 'Usage Status',
    align: 'left',
  },
  subtitle: {
    text: 'update : 2025/01/09 13:30',
    align: 'left',
  },
  xAxis: {
    categories: ['0', '20', '40', '60', '80', '100'],
    crosshair: true,
    accessibility: {
      description: 'Countries',
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: '1000 metric tons (MT)',
    },
  },
  tooltip: {
    valueSuffix: ' (1000 MT)',
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
      borderRadius: 20,
    },
  },
  series: [
    {
      name: 'Taipei',
      data: [2000, 2200, 1290, 643, 1240, 1643],
      color: '#005087',
    },
    {
      name: 'HsinChu',
      data: [953, 1400, 1000, 1405, 1950, 2135],
      color: '#87DE64',
    },
  ],
};

const BreadcrumbItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/first',
    label: 'Level1',
  },
  {
    href: 'https://tw.yahoo.com',
    label: 'Level2',
  },
];

const NavbarItems = [
  {
    href: '#products',
    label: 'Products',
    order: 1,
  },
  {
    href: '#solutions',
    label: 'Solutions',
    order: 2,
  },
  {
    href: '#about',
    label: 'About',
    order: 3,
  },
  {
    href: '#technologies',
    label: 'Technologies',
    order: 4,
  },
];

const SideNavItems = [
  {
    path: '/Home',
    prefix: <SvgHome height={24} width={24} />,
    title: 'Home',
  },
  {
    children: [
      {
        path: '/settings/profile',
        title: 'Profile',
      },
      {
        path: '/settings/account',
        title: 'Account',
      },
    ],
    path: '/User',
    prefix: <SvgUser height={24} width={24} />,
    title: 'User',
  },
  {
    children: [
      {
        path: '/settings/profile',
        title: 'Profile',
      },
      {
        path: '/settings/account',
        title: 'Account',
      },
      {
        path: '/settings/account',
        title: 'Account',
      },
      {
        path: '/settings/account',
        title: 'Account',
      },
    ],
    path: '/Chart',
    prefix: <SvgBarChart height={24} width={24} />,
    title: 'Chart',
  },
  {
    path: '/dashboard',
    prefix: <SvgDatabase height={24} width={24} />,
    title: 'Database',
  },
  {
    path: '/Favorite',
    prefix: <SvgFavorite height={24} width={24} />,
    title: 'Favorite',
  },
  {
    path: '/Calendar',
    prefix: <SvgCalendar height={24} width={24} />,
    title: 'Calendar',
  },
  {
    path: '/Notification',
    prefix: <SvgNotification height={24} width={24} />,
    title: 'Notification',
  },
  {
    path: '/Language',
    prefix: <SvgLanguage height={24} width={24} />,
    title: 'Language',
  },
];

const cardItems = [
  {
    content: {
      label: 'Station',
      value: '238',
    },
  },
  {
    content: {
      label: 'Power',
      value: '24,857',
    },
  },
  {
    content: {
      label: 'Electric Charge',
      value: '5,658',
    },
  },
];

const tagItems = [
  {
    label: 'HsinChu',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Taipei',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Taichung',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Kaohsiung',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Keelong',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Taoyuan',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Miaoli',
    prefix: <SvgLocation width={14} height={14} />,
  },
  {
    label: 'Yunlin',
    prefix: <SvgLocation width={14} height={14} />,
  },
];

const deviceItems = [
  {
    unit: 'Now',
    value: 'Rush Hour',
  },
  {
    unit: 'Percentage',
    value: '55%',
  },
  {
    unit: 'Current count',
    value: '7/22',
  },
  {
    unit: 'Current Power',
    value: '5700kW / 9000kW',
  },
];

export function App() {
  const { Header, Side, Content } = Layout;

  const user = formatToThousand(useCounter(0, 237), ',');
  const power = formatToThousand(useCounter(0, 4857), ',');
  const reservation = formatToThousand(useCounter(0, 5658), ',');
  const equipment = formatToThousand(useCounter(0, 721), ',');
  const revenue = formatToThousand(useCounter(0, 1500), ',');
  const forecast = formatToThousand(useCounter(0, 300), ',');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.ded-header');

      if (window.scrollY > 0) {
        if (header) {
          header.classList.add('ded-header-sticky');
        }
      } else {
        if (header) {
          header.classList.remove('ded-header-sticky');
        }
      }
    });
  }, []);

  return (
    <Layout className="">
      <Header>
        <Navbar
          className=""
          dataSource={NavbarItems}
          logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
          onSearch={() => ({})}
        />
      </Header>
      <Layout>
        <Side>
          <SideNav
            className=""
            dataSource={SideNavItems}
            hasSearch
            logo={<SvgAuo height={30} width={90} />}
            logoLink="https://www.auo.com"
            themeColor="#00467C"
          />
        </Side>
        <Layout>
          <Content className="bg-body">
            <Grid gap={16}>
              <Row>
                <Column xs={12}>
                  <Breadcrumb dataSource={BreadcrumbItems} />

                  <div className="flex justify-between items-center pr-4">
                    <Title level={2}>Equipment Management</Title>
                    <div className="flex gap-2">
                      <Button
                        className="border-neutral-300 hover:border-neutral-400"
                        variant="ghost"
                        prefix={
                          <SvgNotification
                            className="text-neutral-400"
                            width={18}
                            height={18}
                          ></SvgNotification>
                        }
                        onClick={() => ({})}
                      ></Button>
                      <Button
                        className="border-neutral-300 hover:border-neutral-400"
                        variant="ghost"
                        prefix={
                          <SvgSearch
                            className="text-neutral-400"
                            width={18}
                            height={18}
                          ></SvgSearch>
                        }
                        onClick={() => ({})}
                      ></Button>
                      <Button
                        className="border-neutral-300 hover:border-neutral-400"
                        variant="ghost"
                        prefix={
                          <SvgSettings
                            className="text-neutral-400"
                            width={18}
                            height={18}
                          ></SvgSettings>
                        }
                        onClick={() => ({})}
                      ></Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 py-4 px-2 border-t border-b border-gray-200">
                    {tagItems.map((tag, index) => (
                      <Tag
                        key={index}
                        className="bg-white border-white text-neutral-700 hover:bg-hover hover:text-white"
                        label={tag.label}
                        prefix={tag.prefix}
                      />
                    ))}
                  </div>
                </Column>
              </Row>
              <Row rowGap="16px">
                <Column xs={12} md={6} lg={3}>
                  <Card className="bg-primary">
                    <div className="flex justify-between items-center">
                      <Title level={3} className="text-white">
                        AUO GRC
                      </Title>
                      <StatusIndicator
                        variant="text"
                        themeColor="success"
                        prefix={undefined}
                        className="border-2 bg-success-light border-success-dark"
                      >
                        Normal
                      </StatusIndicator>
                    </div>

                    <Divider className="custom-border-color" />
                    <div className="flex flex-col gap-4">
                      {deviceItems.map((item, index) => (
                        <div key={index}>
                          <Title level={5} className="text-tertiary">
                            {item.unit}
                          </Title>
                          <Title level={3} className="text-white">
                            {item.value}
                          </Title>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Column>
                <Column xs={12} md={6}>
                  <Grid fluid gap={16}>
                    <Row rowGap="16px">
                      <Column xs={4}>
                        <Card
                          className="gap-0"
                          cardFooter={
                            <div className="text-right text-neutral-400">K</div>
                          }
                        >
                          <Title className="mx-auto" level={5}>
                            User
                          </Title>
                          <Title className="mx-auto text-secondary" level={3}>
                            {user}
                          </Title>
                        </Card>
                      </Column>
                      <Column xs={4}>
                        <Card
                          className="gap-0"
                          cardFooter={
                            <div className="text-right text-neutral-400">
                              KWh
                            </div>
                          }
                        >
                          <Title className="mx-auto" level={5}>
                            Power
                          </Title>
                          <Title className="mx-auto text-secondary" level={3}>
                            {power}
                          </Title>
                        </Card>
                      </Column>
                      <Column xs={4}>
                        <Card className="gap-0">
                          <Title className="mx-auto" level={5}>
                            Reservation
                          </Title>
                          <Title className="mx-auto text-secondary" level={3}>
                            {reservation}
                          </Title>
                        </Card>
                      </Column>
                      <Column xs={4}>
                        <Card
                          className="gap-0"
                          cardFooter={
                            <div className="text-right text-neutral-400">K</div>
                          }
                        >
                          <Title className="mx-auto" level={5}>
                            Equipment
                          </Title>
                          <Title className="mx-auto text-secondary" level={3}>
                            {equipment}
                          </Title>
                        </Card>
                      </Column>
                      <Column xs={4}>
                        <Card
                          className="gap-0"
                          cardFooter={
                            <div className="text-right text-neutral-400">K</div>
                          }
                        >
                          <Title className="mx-auto" level={5}>
                            Revenue
                          </Title>
                          <Title className="mx-auto text-secondary" level={3}>
                            {revenue}
                          </Title>
                        </Card>
                      </Column>
                      <Column xs={4}>
                        <Card
                          className="gap-0"
                          cardFooter={
                            <div className="text-right text-neutral-400">K</div>
                          }
                        >
                          <Title className="mx-auto" level={5}>
                            Forecast
                          </Title>
                          <Title className="mx-auto text-secondary" level={3}>
                            {forecast}
                          </Title>
                        </Card>
                      </Column>
                    </Row>
                    <Row>
                      <Column xs={12}>
                        <div className="relative rounded-2xl overflow-hidden shadow-card ">
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={chartOptions}
                          />
                          <Button
                            className="absolute top-5 right-6 border-neutral-200 hover:border-neutral-300"
                            size="small"
                            prefix={
                              <SvgInfoCircle
                                className="text-neutral-400"
                                width={18}
                                height={18}
                              ></SvgInfoCircle>
                            }
                            variant="ghost"
                            onClick={() => ({})}
                          ></Button>
                          <Button
                            className="absolute top-5 right-16 border-neutral-200 hover:border-neutral-300"
                            size="small"
                            prefix={
                              <SvgMoreVert
                                className="text-neutral-400"
                                width={18}
                                height={18}
                              ></SvgMoreVert>
                            }
                            variant="ghost"
                            onClick={() => ({})}
                          ></Button>
                        </div>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
                <Column xs={12} md={6} lg={3}>
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-card">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115924.07095472663!2d120.86705469726559!3d24.773967500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836265f076a5f%3A0x36ff69a4c9a2e0e6!2z5Y-L6YGU5YWJ6Zu7IC0g5LyB5qWt57i96YOoIChBVEMp!5e0!3m2!1szh-TW!2stw!4v1735551647460!5m2!1szh-TW!2stw"
                      title="Google Map"
                      width="100%"
                      height="100%"
                      className="border-0"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Column>
              </Row>
              <Row>
                <Column xs={12} md={6} lg={3}>
                  <AreaPowerCard
                    areaPower={{
                      name: 'HsinChu',
                      description: 'HsinChu is a city in Taiwan',
                    }}
                    themeColor="success"
                    percentage={80}
                    dataSource={cardItems}
                  />
                </Column>
                <Column xs={12} md={6} lg={3}>
                  <AreaPowerCard
                    areaPower={{
                      name: 'Taipei',
                      description: 'Taipei is a city in Taiwan',
                    }}
                    themeColor="warning"
                    percentage={50}
                    dataSource={cardItems}
                  />
                </Column>
                <Column xs={12} md={6} lg={3}>
                  <AreaPowerCard
                    areaPower={{
                      name: 'Taichung',
                      description: 'Taipei is a city in Taiwan',
                    }}
                    themeColor="error"
                    percentage={30}
                    dataSource={cardItems}
                  />
                </Column>
                <Column xs={12} md={6} lg={3}>
                  <AreaPowerCard
                    areaPower={{
                      name: 'Kaohsiung',
                      description: 'Taipei is a city in Taiwan',
                    }}
                    themeColor="success"
                    percentage={70}
                    dataSource={cardItems}
                  />
                </Column>
              </Row>
            </Grid>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;

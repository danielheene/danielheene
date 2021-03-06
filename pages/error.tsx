import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import { Button } from '@components/Button';
import { Layout } from '@layouts/index';
import { NavigationItemType } from '@typings/navigation';

const Container = styled.div(tw`
	flex flex-grow min-h-full \
	pt-16 pb-12
`);

const Content = styled.div(tw`
	flex-grow flex flex-col justify-center max-w-7xl w-full \
	mx-auto px-4 sm:px-6 lg:px-8
`);

const IconContainer = styled.div(tw`
	flex flex-shrink-0 justify-center
`);

const Text = styled.div(tw`
	py-4 \
	text-center
`);

const Title = styled.h1(tw`
	mt-2 \
	text-4xl font-extrabold text-white tracking-tight sm:text-5xl
`);

const Description = styled.p(tw`
	mt-8 \
	text-sm font-medium text-gray-400
`);

const Actions = styled.div(tw`
	mt-6 flex justify-center items-center space-x-4
`);

export default function Error() {
  const router = useRouter();
  const { status } = router.query;

  return (
    <Layout.Error>
      <Container>
        <Content>
          <IconContainer>
            <Icon
              icon='feather:alert-triangle'
              tw='h-12 text-primary-500 w-auto'
            />
          </IconContainer>
          <Text>
            <Title>{status}</Title>
            <Description>
              Looks like something went wrong on our end.
              <br />
              This isn't your fault, it's ours. Please try again later.
            </Description>
            <Actions>
              <Button.Standard
                type={NavigationItemType.ACTION}
                onClick={() => history.go(-1)}
                icon='feather:arrow-left'
              >
                Back
              </Button.Standard>
              <Button.Standard
                type={NavigationItemType.LINK}
                href='/'
                icon='feather:home'
              >
                Home
              </Button.Standard>
            </Actions>
          </Text>
        </Content>
      </Container>
    </Layout.Error>
  );
}

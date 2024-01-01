import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './resource.reducer';

export const ResourceDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const resourceEntity = useAppSelector(state => state.resource.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="resourceDetailsHeading">
          <Translate contentKey="jhipsterRosterApplication5App.resource.detail.title">Resource</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{resourceEntity.id}</dd>
          <dt>
            <span id="key">
              <Translate contentKey="jhipsterRosterApplication5App.resource.key">Key</Translate>
            </span>
          </dt>
          <dd>{resourceEntity.key}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="jhipsterRosterApplication5App.resource.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{resourceEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="jhipsterRosterApplication5App.resource.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{resourceEntity.lastName}</dd>
          <dt>
            <span id="teamRole">
              <Translate contentKey="jhipsterRosterApplication5App.resource.teamRole">Team Role</Translate>
            </span>
          </dt>
          <dd>{resourceEntity.teamRole}</dd>
          <dt>
            <span id="exchangeAllowed">
              <Translate contentKey="jhipsterRosterApplication5App.resource.exchangeAllowed">Exchange Allowed</Translate>
            </span>
          </dt>
          <dd>{resourceEntity.exchangeAllowed ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="jhipsterRosterApplication5App.resource.team">Team</Translate>
          </dt>
          <dd>{resourceEntity.team ? resourceEntity.team.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/resource" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/resource/${resourceEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ResourceDetail;

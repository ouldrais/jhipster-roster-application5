import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './team-plan.reducer';

export const TeamPlanDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const teamPlanEntity = useAppSelector(state => state.teamPlan.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="teamPlanDetailsHeading">
          <Translate contentKey="jhipsterRosterApplication5App.teamPlan.detail.title">TeamPlan</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{teamPlanEntity.id}</dd>
          <dt>
            <span id="availability">
              <Translate contentKey="jhipsterRosterApplication5App.teamPlan.availability">Availability</Translate>
            </span>
          </dt>
          <dd>{teamPlanEntity.availability ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="jhipsterRosterApplication5App.teamPlan.team">Team</Translate>
          </dt>
          <dd>{teamPlanEntity.team ? teamPlanEntity.team.id : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterRosterApplication5App.teamPlan.shift">Shift</Translate>
          </dt>
          <dd>{teamPlanEntity.shift ? teamPlanEntity.shift.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/team-plan" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/team-plan/${teamPlanEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TeamPlanDetail;

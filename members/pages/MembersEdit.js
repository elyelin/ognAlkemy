import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../../components/alert/ErrorMessage';
import { CenterBox } from '../../../components/CenterBox/index';
import ComponentSkeleton from '../../../layout/ComponentSkeleton';
import { getMember } from '../../../services/membersService';
import FormMembersEdit from '../components/form-members/FormMembers';
import '../components/form-members/stylesMembers.css';

const MembersEdit = () => {
  const { id } = useParams();
  const [member, setMember] = useState({});
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMember(id)
      .then((res) => {
        setMember(res.data);
        res.data.name ? setReady(true) : setReady(false);
      })
      .catch((error) => {
        setError(true);
        return error;
      });
  }, [id]);
  return (
    <Fragment>
      {ready ? (
        <FormMembersEdit data={member} mode={'edit'} />
      ) : !error ? (
        <div className="contenedorMemberEditSkeleton margin-auto">
          <ComponentSkeleton />
        </div>
      ) : (
        <CenterBox children={<ErrorMessage message={'ESTE MIEMBRO NO EXISTE - ERROR 404'}></ErrorMessage>}></CenterBox>
      )}
    </Fragment>
  );
};
export default MembersEdit;

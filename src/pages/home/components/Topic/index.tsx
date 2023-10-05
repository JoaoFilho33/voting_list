import Tags from '../tags';
import Description from '../Description';
import Autor from '../Autor';
import Date from '../Date';
import Balance from '../Balance';
import { Topic as TopicType } from '../../../../core/interfaces/types';
import './style.css';
import LikeButtonComponent from '../LikeButton';
import DislikeButtonComponent from '../DislikeButton';

type TopicProps = {
  topic: TopicType;
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
  };

const Topic: React.FC<TopicProps> = ({ topic, onLike, onDislike }) => {

  return (
    <div className='topic'>
      <Tags tags={topic.tags} />
      <Description description={topic.descricao} />
      <Autor authorName={topic.autor.nome} />
      <Date date={topic.created_at} />
      <div >{topic.autor.cidade}</div>
      <div className='vote-bar'>
        <LikeButtonComponent onVote={() => onLike(topic.id)} votes={topic.votes} />
        <DislikeButtonComponent onVote={() => onDislike(topic.id)} votes={topic.votes} />
      </div>  
      <Balance votes={topic.votes} />
    </div>
  );
};

export default Topic;
import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack, IoAdd, IoDocumentText, IoTime, IoCheckmarkCircle } from 'react-icons/io5';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { getContractsByUserId, getUserById, currentUserId, mockContracts } from '../data/mockData';
import styles from './Contract.module.css';

const Contract: React.FC = () => {
  const contracts = getContractsByUserId(currentUserId).map(contract => ({
    id: contract.id,
    title: contract.title,
    client: getUserById(contract.clientId)?.name || 'Unknown Client',
    status: contract.status as 'pending' | 'active' | 'completed',
    deadline: contract.deadline,
    budget: contract.budget,
  }));

  const getStatusIcon = (status: Contract['status']) => {
    switch (status) {
      case 'active':
        return <IoCheckmarkCircle className={styles.statusIconActive} />;
      case 'completed':
        return <IoCheckmarkCircle className={styles.statusIconCompleted} />;
      case 'pending':
        return <IoTime className={styles.statusIconPending} />;
      default:
        return null;
    }
  };

  return (
    <ThemedView className={styles.container}>
      <div className={styles.header}>
        <Link to="/homepage" className={styles.backButton}>
          <IoArrowBack /> Back
        </Link>
        <ThemedText as="h1" className={styles.title}>
          Contracts & Jobs
        </ThemedText>
        <button className={styles.createButton}>
          <IoAdd /> New Contract
        </button>
      </div>
      <main className={styles.main}>
        <div className={styles.contractsList}>
          {contracts.map((contract) => (
            <div key={contract.id} className={styles.contractCard}>
              <div className={styles.contractHeader}>
                <div className={styles.contractTitleSection}>
                  <IoDocumentText className={styles.contractIcon} />
                  <div>
                    <ThemedText as="h3" className={styles.contractTitle}>
                      {contract.title}
                    </ThemedText>
                    <ThemedText className={styles.contractClient}>
                      Client: {contract.client}
                    </ThemedText>
                  </div>
                </div>
                <div className={styles.contractStatus}>
                  {getStatusIcon(contract.status)}
                  <ThemedText className={styles.statusText}>
                    {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                  </ThemedText>
                </div>
              </div>
              <div className={styles.contractDetails}>
                <div className={styles.detailItem}>
                  <ThemedText className={styles.detailLabel}>Deadline:</ThemedText>
                  <ThemedText className={styles.detailValue}>{contract.deadline}</ThemedText>
                </div>
                <div className={styles.detailItem}>
                  <ThemedText className={styles.detailLabel}>Budget:</ThemedText>
                  <ThemedText className={styles.detailValue}>{contract.budget}</ThemedText>
                </div>
              </div>
              <div className={styles.contractActions}>
                <button className={styles.actionButton}>View Details</button>
                <Link to="/chat" className={styles.actionButtonSecondary}>
                  Message Client
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </ThemedView>
  );
};

export default Contract;


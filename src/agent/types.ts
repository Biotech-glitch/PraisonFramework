// Re-export types and classes from agent.ts to maintain backward compatibility
export { Task, Agent, PraisonAIAgents } from './agent';
export type { TaskConfig, AgentConfig, PraisonAIAgentsConfig } from './agent';

// Legacy type aliases for backward compatibility
export type { AgentConfig as TaskAgentConfig };
export type { PraisonAIAgentsConfig as TaskPraisonAIAgentsConfig };
